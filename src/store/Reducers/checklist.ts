import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ItemState = {
  checked: boolean
  detail: string
}

type Teste = {
  ramal: string
  data: string
  hora: string
  operador: string
  checks: {
    chamada: boolean
    evento: boolean
    camera: boolean
    comando: boolean
  }
  detalhe: string
}

type InfoCondominio = {
  nome: string
  endereco: string
  responsavel: string
  contato: string
}

type ChecklistState = {
  checklist: {
    [category: string]: {
      [item: string]: ItemState
    }
  }
  testeAtual: Teste | null
  testes: Teste[]
  info: InfoCondominio
}

const initialState: ChecklistState = {
  checklist: {},
  testeAtual: null,
  testes: [],
  info: {
    nome: '',
    endereco: '',
    responsavel: '',
    contato: ''
  }
}

const checklistSlice = createSlice({
  name: 'checklist',
  initialState,
  reducers: {
    toggleItem: (
      state,
      action: PayloadAction<{ category: string; item: string }>
    ) => {
      const { category, item } = action.payload

      if (!state.checklist[category]) state.checklist[category] = {}
      if (!state.checklist[category][item]) {
        state.checklist[category][item] = { checked: false, detail: '' }
      }

      state.checklist[category][item].checked =
        !state.checklist[category][item].checked
    },

    setDetail: (
      state,
      action: PayloadAction<{
        category: string
        item: string
        value: string
      }>
    ) => {
      const { category, item, value } = action.payload

      if (!state.checklist[category]) state.checklist[category] = {}
      if (!state.checklist[category][item]) {
        state.checklist[category][item] = { checked: false, detail: '' }
      }

      state.checklist[category][item].detail = value
    },

    startTeste: (state) => {
      const now = new Date()

      state.testeAtual = {
        ramal: '',
        data: now.toLocaleDateString(),
        hora: now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        }),
        operador: '',
        checks: {
          chamada: false,
          evento: false,
          camera: false,
          comando: false
        },
        detalhe: ''
      }
    },

    setTesteAtualField: (
      state,
      action: PayloadAction<{
        field: 'ramal' | 'operador'
        value: string
      }>
    ) => {
      if (!state.testeAtual) return
      state.testeAtual[action.payload.field] = action.payload.value
    },

    toggleTesteAtualCheck: (
      state,
      action: PayloadAction<keyof Teste['checks']>
    ) => {
      if (!state.testeAtual) return
      const check = action.payload
      state.testeAtual.checks[check] = !state.testeAtual.checks[check]
    },

    setTesteAtualDetail: (state, action: PayloadAction<string>) => {
      if (!state.testeAtual) return
      state.testeAtual.detalhe = action.payload
    },

    submitTeste: (state) => {
      if (!state.testeAtual) return

      state.testes.push(state.testeAtual)
      state.testeAtual = null
    },

    removeTeste: (state, action: PayloadAction<number>) => {
      state.testes.splice(action.payload, 1)
    },

    editTeste: (state, action: PayloadAction<number>) => {
      const index = action.payload
      state.testeAtual = state.testes[index]
      state.testes.splice(index, 1)
    },

    setInfo: (
      state,
      action: PayloadAction<{
        field: keyof InfoCondominio
        value: string
      }>
    ) => {
      state.info[action.payload.field] = action.payload.value
    }
  }
})

export const {
  toggleItem,
  setDetail,
  startTeste,
  setTesteAtualField,
  toggleTesteAtualCheck,
  setTesteAtualDetail,
  submitTeste,
  editTeste,
  removeTeste,
  setInfo
} = checklistSlice.actions
export default checklistSlice.reducer
