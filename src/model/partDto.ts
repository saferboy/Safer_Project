export interface PartDto {
    id:                 number,
    title:              string,
    released:           string,
    genre:              string,
    interface_language: string,
    voice_language:     string,
    image:              string,
    status:             string
}

export interface PartBody {
    title:              string,
    released:           string,
    genre:              string,
    interface_language: string,
    voice_language:     string,
    system: {
        oc:     string,
        cpu:    string,
        ram:    string,
        video_card: string,
        size:   string
    }
}


export interface PartSystem {
    oc:         string,
    cpu:        string,
    ram:        string,
    video_card: string,
    size:       string
}
