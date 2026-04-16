import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../store'
import {
  setTesteAtualDetail,
  setTesteAtualField,
  submitTeste,
  toggleTesteAtualCheck
} from '../../store/Reducers/checklist'

import * as S from './styles'
import Button from '../Button'

const TestsSection = () => {
  const { testeAtual } = useSelector((state: RootState) => state.checklist)
  const dispatch = useDispatch()

  const checks = [
    { key: 'chamada', label: 'Chamada' },
    { key: 'evento', label: 'Evento' },
    { key: 'camera', label: 'Câmera' },
    { key: 'comando', label: 'Comando' }
  ] as const

  if (!testeAtual) return null

  return (
    <S.Card>
      <S.Title>Teste com a base</S.Title>

      <S.InputGroup>
        <S.Input
          placeholder="Ramal"
          value={testeAtual.ramal}
          onChange={(e) =>
            dispatch(
              setTesteAtualField({
                field: 'ramal',
                value: e.target.value
              })
            )
          }
        />

        <S.Input
          placeholder="Operador"
          value={testeAtual.operador}
          onChange={(e) =>
            dispatch(
              setTesteAtualField({
                field: 'operador',
                value: e.target.value
              })
            )
          }
        />
      </S.InputGroup>

      <S.CheckGroup>
        {checks.map((c) => (
          <label key={c.key}>
            <input
              type="checkbox"
              checked={testeAtual.checks[c.key]}
              onChange={() => dispatch(toggleTesteAtualCheck(c.key))}
            />
            {c.label}
          </label>
        ))}
      </S.CheckGroup>

      <S.Details
        placeholder="Detalhes"
        value={testeAtual.detalhe}
        onChange={(e) => dispatch(setTesteAtualDetail(e.target.value))}
      />

      <S.Actions>
        <Button onClick={() => dispatch(submitTeste())}>Enviar teste</Button>
      </S.Actions>
    </S.Card>
  )
}

export default TestsSection
