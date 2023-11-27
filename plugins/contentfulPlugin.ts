import {createClient} from 'contentful'

const config = {
    space: 'pxvouirr59v1',
    accessToken: 'm1ZDwGZY4nHki2ClfCKOJblJ43X6_wmiOULdqaGjDyM'
};

export default defineNuxtPlugin(() => {
  return {
    provide: {
      client :createClient({
        space: 'pxvouirr59v1',
        accessToken: 'm1ZDwGZY4nHki2ClfCKOJblJ43X6_wmiOULdqaGjDyM'
      })
    }
  }
})