import { useDispatch, useSelector } from 'react-redux'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

import {
  toggleItem,
  setDetail,
  startTeste
} from '../../store/Reducers/checklist'
import { RootState } from '../../store'

import TestsSection from '../TestsSection'
import Summary from '../Summary'

import * as S from './styles'
import Button from '../Button'
import HeaderForm from '../Header'

const Checklist = () => {
  const dispatch = useDispatch()
  const values = useSelector((state: RootState) => state.checklist)

  const gerarPDF = async () => {
    const element = document.getElementById('pdf-content')
    if (!element) return

    // 🔥 ativa modo PDF
    element.classList.add('pdf-mode')

    const pages = document.querySelectorAll('.pdf-page')
    const pdf = new jsPDF('p', 'mm', 'a4')

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i] as HTMLElement, {
        scale: 2,
        useCORS: true
      })

      const imgData = canvas.toDataURL('image/png')

      const width = pdf.internal.pageSize.getWidth()
      const height = (canvas.height * width) / canvas.width

      if (i > 0) pdf.addPage()

      pdf.addImage(imgData, 'PNG', 0, 0, width, height)
    }

    // 🔥 desativa modo PDF
    element.classList.remove('pdf-mode')

    pdf.save('relatorio.pdf')
  }

  const checklist = {
    equipment: {
      title: 'Equipamentos',
      items: [
        'MG3000 e Receptores',
        'CT3000',
        'ATA',
        'Khomps',
        'Leitoras (facial/biometria)'
      ]
    },
    access: {
      title: 'Controle de acesso',
      items: [
        'Comando remoto liberando as portas',
        'Dispositivos, eventos, zonas e perfil configurados',
        'Câmeras vinculadas aos eventos',
        'Intertravamento',
        'SIP'
      ]
    },
    cameras: {
      title: 'Câmeras',
      items: [
        'DVR cadastrado no servidor',
        'Câmeras ativas',
        'Câmeras dos elevadores',
        'Gravação de imagem',
        'App Vila Rica'
      ]
    }
  }

  return (
    <>
      <HeaderForm />
      <S.Form action="">
        {Object.entries(checklist).map(([key, category]) => (
          <div key={key}>
            <h2>{category.title}</h2>
            {category.items.map((item) => (
              <S.InputGroup key={item}>
                <S.Check
                  type="checkbox"
                  checked={values.checklist?.[key]?.[item]?.checked || false}
                  onChange={() => dispatch(toggleItem({ category: key, item }))}
                />
                <label>{item}</label>
                <S.Details
                  type="text"
                  placeholder="Adicionar detalhes"
                  value={values.checklist?.[key]?.[item]?.detail || ''}
                  onChange={(e) =>
                    dispatch(
                      setDetail({
                        category: key,
                        item,
                        value: e.target.value
                      })
                    )
                  }
                />
              </S.InputGroup>
            ))}
          </div>
        ))}
      </S.Form>

      <S.Testes>
        <h2>Testes com a base</h2>
        <Button
          variant="secondary"
          onClick={() => dispatch(startTeste())}
          disabled={!!values.testeAtual}
        >
          + Novo teste
        </Button>
        <TestsSection />
      </S.Testes>

      <Summary checklist={checklist} values={values} />

      <S.Actions>
        <Button onClick={gerarPDF}>Gerar PDF</Button>
      </S.Actions>
    </>
  )
}

export default Checklist
