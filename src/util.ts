import { createHashHistory } from 'history'
import _ from 'lodash'
import queryString from 'query-string'

function processHistory(history: any) {
  const _push = history.push
  const _replace = history.replace

  history.push = function (one: any) {
    if (!_.isPlainObject(one)) {
      return _push.apply(this, arguments)
    }

    const o = Object.assign({}, one)

    if (o.query) {
      o.search = queryString.stringify(o.query)
    }

    _push.apply(this, [o])
  }

  history.replace = function (one: any) {
    if (!_.isPlainObject(one)) {
      return _replace.apply(this, arguments)
    }

    const o = Object.assign({}, one)

    if (o.query) {
      o.search = queryString.stringify(o.query)
    }

    _replace.apply(this, [o])
  }

  return history
}

const history = processHistory(createHashHistory())

export {
  history
}