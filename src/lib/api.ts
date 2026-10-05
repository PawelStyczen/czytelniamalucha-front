const defaultApiBaseUrl = "http://localhost:7071";

const apiBaseUrl =
  import.meta.env.API_BASE_URL?.trim() ||
  import.meta.env.CHECKOUT_API_BASE?.trim() ||
  defaultApiBaseUrl;

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = "ApiError";
  }
}

function buildApiUrl(path: string): URL {
  const normalizedBaseUrl = apiBaseUrl.endsWith("/")
    ? apiBaseUrl
    : `${apiBaseUrl}/`;

  return new URL(path.replace(/^\//, ""), normalizedBaseUrl);
}

export async function apiRequest<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const url = buildApiUrl(path);
  let response: Response;

  try {
    response = await fetch(url, {
      ...init,
      headers: {
        Accept: "application/json",
        ...init.headers,
      },
    });
  } catch (error) {
    throw new ApiError(`Nie udało się połączyć z API: ${url.pathname}`, undefined, {
      cause: error,
    });
  }

  if (!response.ok) {
    throw new ApiError(
      `API zwróciło ${response.status} dla ${url.pathname}`,
      response.status,
    );
  }

  try {
    return (await response.json()) as T;
  } catch (error) {
    throw new ApiError(
      `API zwróciło nieprawidłowy JSON dla ${url.pathname}`,
      response.status,
      { cause: error },
    );
  }
}
