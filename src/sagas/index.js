import { fork } from 'redux-saga/effects';
import tasks from './tasks'
import viewConfig from './viewConfig'

export default function* () {
  yield [
    fork(tasks),
    fork(viewConfig),
  ]
}
