import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setInfo } from '../../store/Reducers/checklist'

import * as S from './styles'

const HeaderForm = () => {
  const dispatch = useDispatch()
  const info = useSelector((state: RootState) => state.checklist.info)

  return (
    <S.Card>
      <h2>Dados do Condomínio</h2>

      <S.Input
        placeholder="Nome do condomínio"
        value={info.nome}
        onChange={(e) =>
          dispatch(setInfo({ field: 'nome', value: e.target.value }))
        }
      />

      <S.Input
        placeholder="Endereço"
        value={info.endereco}
        onChange={(e) =>
          dispatch(setInfo({ field: 'endereco', value: e.target.value }))
        }
      />

      <S.Input
        placeholder="Responsável"
        value={info.responsavel}
        onChange={(e) =>
          dispatch(setInfo({ field: 'responsavel', value: e.target.value }))
        }
      />

      <S.Input
        placeholder="Contato"
        value={info.contato}
        onChange={(e) =>
          dispatch(setInfo({ field: 'contato', value: e.target.value }))
        }
      />
    </S.Card>
  )
}

export default HeaderForm
