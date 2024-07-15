export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const api = $fetch.create({
      baseURL: config.public.baseUrl,
      onRequest({ request, options, error }) {
          options.headers = options.headers || {}
          options.headers.Authorization = `Bearer ${config.public.apiKey}`
      },
      onResponse ({response}) {
        return response;
      },
      onResponseError({ response }) {
        if (response.status === 401) {
          console.log(response);
        }
      }
    })
    return {
      provide: {
        api
      }
    }
  })