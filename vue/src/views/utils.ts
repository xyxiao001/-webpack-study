import { ref, watchEffect, customRef, reactive, toRef, toRefs, watch } from '@vue/composition-api'

export const  useDebugState = (label: string, initialValue: string) => {
  const state = ref(initialValue);
  watchEffect(() => {
    console.log(`${label}: `, state.value);
  });
  return state;
}

export const useDebouncedRef = (value: string, delay = 200) => {
  let timeout: number
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue: string) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      },
    }
  })
}

export const useGetTableData = (query: any) => {
  // console.log(query)
  const table = reactive({
    list: [],
    loading: true,
    getData: (key = '') => {
      table.loading = true
      fetchList(key.trim()).then((res: any) => {
        table.list = res
        table.loading = false
        console.log('数据请求成功...')
      })
    }
  })
  
  console.log('开始请求数据...')
  
  watch(query, (val: string) => {
    table.getData(val)
  })


  table.getData(query.value)

  return toRefs(table)
}


const fetchList = (query = '', time = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(createTableList(query))
    }, time)
  })
}

const createTableList = (query = '') => {
  const model = {
    name: '测试角色',
    date: '2020-08-21',
    address: '21223'
  }
  let arr = []
  const total = 10
  let i = 0
  while (i < total) {
    arr.push(
      Object.assign({}, model, {
        name: model.name + i
      })
    )
    i++
  }
  arr = arr.filter(item => item.name.includes(query))
  return arr
}