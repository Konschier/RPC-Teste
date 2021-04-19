export interface ClassificacaoProps {
	Idade: string;
	Conteudo?: any;
	Sexo: boolean;
	Drogas: boolean;
	Violencia: boolean;
}

export interface DescritorProps {
	Codigo: string;
	Descricao: string;
}

export interface IdiomaProps {
	Codigo: string;
	Descricao: string;
}

export interface AudioProps {
	Tipo: string;
}

export interface OponenteProps {
	Nome?: any;
	URL?: any;
	ImagemURL?: any;
}

export interface EntryProps {
	media_id: number;
	title: string;
	description: string;
	webmedia_title_id: string;
	start_time: number;
	end_time: number;
	human_start_time: string;
	human_end_time: string;
	duration_in_minutes: number;
	live_broadcast: boolean;
	custom_info: {
		BaseUTCOffset: string;
		SiglaEmissora: string;
		LogoEmissoraURL?: any;
		Local: string;
		DescricaoPrograma: string;
		Temporada: number;
		NomeTemporada?: any;
		Periodicidade: string;
		Dias: {
			Seg: boolean;
			Ter: boolean;
			Qua: boolean;
			Qui: boolean;
			Sex: boolean;
			Sab: boolean;
			Dom: boolean;
		};
		TituloOriginal: string;
		TituloPortugues: string;
		Classe: string;
		Programa: string;
		Complemento: string;
		Apresenta?: any;
		Capitulo: string;
		Inedito: string;
		DireitoCopia: string;
		Pais: string;
		Ano: number;
		Video: string;
		Diretor: string;
		AtorPrincipal?: any;
		Elenco: string;
		Dubladores: string;
		Genero: {
			Descricao: string;
		};
		Subgenero: {
			Descricao: string;
		};
		Classificacao: ClassificacaoProps;
		DescritoresConteudo: {
			Descritor: DescritorProps;
		};
		Resumos: {
			Sinopse: string;
			ResumoImprensa: string;
			Destaque: string;
		};
		Idiomas: {
			Idioma: Array<IdiomaProps>;
		};
		Audios: {
			Audio: Array<AudioProps>;
		};
		Graficos: {
			URL: string;
			Trailler?: any;
			ImagemURL: string;
			PosterURL: string;
			LogoURL: string;
			Confronto: {
				Oponente: Array<OponenteProps>;
			};
		};
		Duracao: number;
		Tipo: string;
		ClosedCaption: boolean;
		URLPrograma: string;
	};
	program: {
		id: number;
		name: string;
		category: string;
		parental_guide?: any;
		webmedia_program_id?: number;
	};
}

export interface EpgProps {
	programme: {
		date: string;
		entries: Array<EntryProps>;
	};
}
