import test from 'ava'
import RHeader from '../RHeader.vue'
import Vue from 'vue'

test('RHeader.vue', t => {
  const vm = new Vue(RHeader).$mount()
  const tree = {
    $el: vm.$el.outerHTML
  }
  t.snapshot(tree)
})
