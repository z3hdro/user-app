import {GET} from './rest';

export const API_GET = async (
  url: string,
  headers = {},
): Promise<{data: any; success: boolean}> => {
  try {
    const response = await GET(url, headers);
    const responseBody = await response.text();

    const result = JSON.parse(responseBody);
    const data = result.results ?? {};

    if (response?.status >= 200 && response?.status < 300) {
      return {
        data,
        success: true,
      };
    }

    return {
      data: result.errors,
      success: false,
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      data: e.message,
      success: false,
    };
  }
};
