export interface CommunityIssue {
  id: string
  title: string
  description: string
  category: 'infraestrutura' | 'seguranca' | 'educacao' | 'saude' | 'meio-ambiente' | 'transporte' | 'outros'
  location: {
    lat: number
    lng: number
    address: string
  }
  status: 'aberto' | 'em-andamento' | 'resolvido' | 'rejeitado'
  votes: number
  reportedBy: string
  reportedAt: Date
  updatedAt: Date
  images?: string[]
  priority: 'baixa' | 'media' | 'alta' | 'urgente'
}

export interface CommunityEvent {
  id: string
  title: string
  description: string
  category: 'reuniao' | 'festa' | 'limpeza' | 'esporte' | 'educacao' | 'outros'
  date: Date
  location: {
    lat?: number
    lng?: number
    address: string
  }
  organizer: string
  participants: string[]
  maxParticipants?: number
  isPublic: boolean
  imageUrl?: string
}

export interface CommunityUser {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'morador' | 'administrador' | 'moderador'
  address: string
  joinedAt: Date
  isVerified: boolean
}

export interface MarketplaceItem {
  id: string
  title: string
  description: string
  category: 'servicos' | 'produtos' | 'doacao' | 'troca'
  price?: number
  images: string[]
  seller: string
  location: string
  status: 'disponivel' | 'vendido' | 'reservado'
  createdAt: Date
  contact: {
    phone?: string
    email?: string
    whatsapp?: string
  }
}

export interface VolunteerOpportunity {
  id: string
  title: string
  description: string
  category: 'limpeza' | 'educacao' | 'idosos' | 'criancas' | 'animais' | 'outros'
  location: string
  date: Date
  duration: number // em horas
  volunteersNeeded: number
  volunteersRegistered: string[]
  organizer: string
  requirements?: string[]
  isActive: boolean
}
