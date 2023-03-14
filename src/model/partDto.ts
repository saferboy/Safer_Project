export interface PartDto {
    id:                 number,
    title:              string,
    released:           string,
    genre:              string,
    interface_language: string,
    voice_language:     string,
    image:              string
}

export interface PartBody {
    title:              string,
    released:           string,
    genre:              string,
    interface_language: string,
    voice_language:     string,
}

// title:
// released
// genre: Action, Simulator, MMO, 3rd Person
// interface_language: Русский
// voice_language: Русский
// image:
// System requirements
// OC: Windows XP / Vista / 7 / 8 / 10
// CPU: 2.6 ГГц и выше
// RAM: 4 Гб
// video_card: 512 Mb - 1024 Mb
// size: 20 Гб
// status