export class Services {
  constructor(axios) {
    this.$axios = axios
  }

  async getPorjects(lang) {
    try {
     return await this.$axios.get(`/api/v1/${lang}/projects`)
    } catch(e) {
      return Promise.reject(e)
    }
  }

  async getPorjectBySlug(lang, slug) {
    try {
     return await this.$axios.get(`/api/v1/${lang}/projects/${slug}`)
    } catch(e) {
      return Promise.reject(e)
    }
  }

  async getLocalizationText(lang) {
    try {
     return await this.$axios.get(`/api/v1/${lang}/localization`)
    } catch(e) {
      return Promise.reject(e)
    }
  }

  async getTeam(lang) {
    try {
     return await this.$axios.get(`/api/v1/${lang}/team`)
    } catch(e) {
      return Promise.reject(e)
    }
  }

  async getReviews(lang) {
    try {
     return await this.$axios.get(`/api/v1/${lang}/reviews`)
    } catch(e) {
      return Promise.reject(e)
    }
  }
}
