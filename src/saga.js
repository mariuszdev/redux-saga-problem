import { call, fork, takeEvery } from 'redux-saga/effects';

// CASE 1
function* foo1_a() {
  yield null;
  return true;
}
function* foo1() {
  yield call(foo1_a);
  console.log('Foo1 before finish.');
}

// CASE 2
function* foo2_a() {
  const task = yield takeEvery('EVENT', foo2_a);

  console.log('Foo2 - takeEvery returned'); // HAPPENS

  return task;
}

function* foo2() {
  yield call(foo2_a);
  console.log('Foo2 before finish.'); // NEVER HAPPENS
}

// CASE 3
function* foo3_a() {
  yield null;
}

function* foo3_b() {
  return yield fork(foo3_a);
}

function* foo3() {
  yield call(foo3_b);
  console.log('Foo3 before finish.'); // HAPPENS
}

export default function* () {
  yield fork(foo1);
  yield fork(foo2);
  yield fork(foo3);
}
