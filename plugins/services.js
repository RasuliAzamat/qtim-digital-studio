import {Services} from '@/services/'
export default function({$axios}, inject) {
  const services = new Services($axios)
  inject('services', services)
}