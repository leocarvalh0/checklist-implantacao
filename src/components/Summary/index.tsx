import { useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeTeste, editTeste } from '../../store/Reducers/checklist'

import VilaRica from '../../assets/logotipo.png'
import * as S from './styles'

type ChecklistType = {
  [key: string]: {
    title: string
    items: string[]
  }
}

type Props = {
  checklist: ChecklistType
  values: RootState['checklist']
}

const Summary = ({ checklist, values }: Props) => {
  const dispatch = useDispatch()
  const { info } = values

  const TESTES_POR_PAGINA = 11

  // 🔥 função para dividir os testes
  const chunkArray = <T,>(array: T[], size: number) => {
    const result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }

  const testesAgrupados = chunkArray(values.testes, TESTES_POR_PAGINA)

  return (
    <div id="pdf-content">
      {/* ===== PÁGINA 1 (HEADER + CHECKLIST) ===== */}
      <div className="pdf-page">
        <S.Summary>
          {/* HEADER */}
          <S.Header>
            <img src={VilaRica} alt="Vila Rica" />
            <h1>Grupo Vila Rica Portarias</h1>
            <p>Relatório Técnico de Implantação</p>

            <S.Meta>
              <span>Data: {new Date().toLocaleDateString()}</span>
            </S.Meta>

            <S.InfoBox>
              <p>
                <strong>Condomínio:</strong> {info.nome}
              </p>
              <p>
                <strong>Endereço:</strong> {info.endereco}
              </p>
              <p>
                <strong>Responsável:</strong> {info.responsavel}
              </p>
              <p>
                <strong>Contato:</strong> {info.contato}
              </p>
            </S.InfoBox>
          </S.Header>

          <S.Divider />

          {/* CHECKLIST */}
          <S.Section>
            <h2>Checklist</h2>

            {Object.entries(checklist).map(([key, category]) => {
              const items = category.items

              const total = items.length
              const ok = items.filter(
                (item) => values.checklist?.[key]?.[item]?.checked
              ).length

              return (
                <div key={key}>
                  <h3>
                    {category.title} ({ok}/{total})
                  </h3>

                  {items.map((item) => {
                    const data = values.checklist?.[key]?.[item]

                    return (
                      <S.Item key={item}>
                        <span
                          style={{
                            color: data?.checked ? '#16a34a' : '#dc2626'
                          }}
                        >
                          {data?.checked ? '✔' : '✖'}
                        </span>

                        <span>{item}</span>

                        {!data?.checked && !data?.detail && (
                          <small style={{ color: '#dc2626' }}>
                            Não verificado
                          </small>
                        )}

                        {data?.detail && <small>{data.detail}</small>}
                      </S.Item>
                    )
                  })}
                </div>
              )
            })}
          </S.Section>

          <S.SignatureSection>
            <ul>
              <S.SignatureBox>
                <S.SignatureLine />
                <span>Técnico</span>
              </S.SignatureBox>

              <S.SignatureBox>
                <S.SignatureLine />
                <span>Supervisor técnico</span>
              </S.SignatureBox>

              <S.SignatureBox>
                <S.SignatureLine />
                <span>Lider de monitoramento</span>
              </S.SignatureBox>

              <S.SignatureBox>
                <S.SignatureLine />
                <span>Cliente</span>
              </S.SignatureBox>
            </ul>
          </S.SignatureSection>

          <S.Footer>
            Grupo Vila Rica Portarias • www.grupovilaricaportarias.com.br
          </S.Footer>
        </S.Summary>
      </div>

      {/* ===== PÁGINAS DE TESTES ===== */}
      {testesAgrupados.map((grupo, pageIndex) => (
        <div className="pdf-page" key={pageIndex}>
          <S.Summary>
            <S.Section>
              <h2>Testes realizados</h2>

              {grupo.map((teste, index) => (
                <S.TestCard key={index}>
                  <S.TestHeader>
                    <strong>Ramal {teste.ramal}</strong>
                    <small>
                      {teste.data} às {teste.hora}
                    </small>
                  </S.TestHeader>

                  <p>
                    <strong>Operador:</strong> {teste.operador}
                  </p>

                  <S.CheckGrid>
                    {Object.entries(teste.checks).map(([key, value]) => (
                      <span key={key}>
                        {value ? '✔' : '✖'}{' '}
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                    ))}
                  </S.CheckGrid>

                  {teste.detalhe && <S.Obs>Obs: {teste.detalhe}</S.Obs>}

                  <S.CardActions className="no-print">
                    <button
                      onClick={() => dispatch(editTeste(index))}
                      disabled={!!values.testeAtual}
                    >
                      ✏️ Editar
                    </button>

                    <button onClick={() => dispatch(removeTeste(index))}>
                      🗑️ Remover
                    </button>
                  </S.CardActions>
                </S.TestCard>
              ))}
            </S.Section>

            <S.Footer>
              Grupo Vila Rica Portarias • www.grupovilaricaportarias.com.br
            </S.Footer>
          </S.Summary>
        </div>
      ))}
    </div>
  )
}

export default Summary
