export type ChecklistCategory = 'equipamentos' | 'acesso' | 'cameras'

export type ChecklistData = Record<ChecklistCategory, string[]>

export const checklist: ChecklistData = {
  equipamentos: [
    'MG3000 e receptores',
    'CT3000',
    'ATA',
    'Khomps',
    'Faciais atualizadas e sincronizadas'
  ],
  acesso: [
    'Comando remoto liberando as portas',
    'Dispositivos, eventos, zonas e perfil configurado',
    'Câmeras vinculadas aos eventos',
    'Intertravamento',
    'SIP'
  ],
  cameras: [
    'DVR cadastrado no servidor',
    'Câmeras ativas',
    'Câmeras dos elevadores',
    'Gravação ativa',
    'App Vila Rica'
  ]
}
