import axios from 'axios'

export const get = ({
  url,
  params
}) => {
  return axios({
    url,
    params
  })
  .then((result) => {
    return result
  })
  .catch((err) => {
    return err.message
  })
}

export const post = ({
  url,
  data
}) => {
  return axios({
    url,
    data,
    method:'POST'
  })
  .then((result) => {
    return result
  })
  .catch((err) => {
    return err.message
  })
}