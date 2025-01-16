export interface WhatsNew {
    id: number;
    launchDate: any;
    expiryDate: any;
    description: string;
    url : { 
        title: string, 
        link: string
    }
    mediaUrl: { 
        mediaLink: string,
        duration: number
    }
    type : 1 | 2 | 3; 
    status : 'active' | 'inactive' ; 
    theme : 'primary' | 'warning' | 'danger' ;  
}

export interface WhatsNewDetails {
    description: string;
    url : { 
        title: string, 
        link: string
    }
    mediaUrl: { 
        mediaLink: string,
        duration: number
    }
    type : 1 | 2 | 3; 
    status : 'active' | 'inactive' ; 
    theme : 'primary' | 'warning' | 'danger' ;  
}