import type { PackageItem, NPM, PackageInfo } from './../types'
import { defineStore } from 'pinia'
import axios from 'axios'

const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/'
const BASE_URL = 'https://registry.npmjs.org/'

export const useNPM = defineStore({
  id: 'NPM',
  state: () => ({
    NPMItems: [] as PackageItem[] | [],
    isLoaded: false,
    packageInfo: {} as PackageInfo | {}
  }),

  actions: {
    async getNPMItems(name: string) {
      this.NPMItems = []
      try {
        this.isLoaded = true

        const response = await axios.get(`${BASE_URL}-/v1/search?text=${name}`)
        const getData = response.data

        this.NPMItems = getData.objects.map((el: NPM) => {
          return {
            name: el.package.name,
            version: el.package.version
          }
        })

        this.isLoaded = false
      } catch (error) {
        console.error('Error fetching NPM items:', error)
        this.isLoaded = false // Reset isLoaded in case of an error
      }
    },
    async getPackage(name: string, version: string) {
      try {
        const response = await axios.get(`${corsProxyUrl}${BASE_URL}${name}/${version}`)
        const getData = response.data

        const info: PackageInfo = {
          name: getData?.name,
          version: getData.version,
          description: getData.description,
          module: getData.module,
          repository: getData.repository.url,
          author: getData.author?.name,
          homepage: getData.homepage
        }
        this.packageInfo = info

        this.isLoaded = false
      } catch (error) {
        console.error('Error fetching NPM items:', error)
      }
    },
    cleanPackageInfo() {
      this.packageInfo = {}
    }
  }
})
