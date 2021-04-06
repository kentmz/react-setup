import ReactDOM from 'react-dom'
import { App } from './app'
import axios from 'axios'
import { useCookies } from 'react-cookie'

ReactDOM.render(<App />, document.getElementById('root'))

// function GetTokenId() {
//   const [cookies] = useCookies(['token'])
//   return cookies['id']
// }

axios.interceptors.request.use(
  function (successfulReq) {
    successfulReq.headers['Authorization'] =
      'Bearer FnZyLRWhSNJrLudoLzuDQ-_cMX4EstpTUrqL-47zxVCzsDtP32fFIoG4nDURm_4dxS7yS2FF6SsYLbusRtXdG69TLavI1wVa9Wkqr46pdWfEOasBr8bCjXgYAmsshsEtfge_KnXJfeCB-hGtwWTVM9lA1vORLaCzryg-j58KEa1-W47dNDV3Bi4NCPphBHcNUnR0y1xTbCp-qyJzQRCHsSw1tA9hs67YsQQWzLRhbCY0QfFr'
    return successfulReq
  },
  function (error) {
    return error
  }
)
