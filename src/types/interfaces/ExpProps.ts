interface Experience {
    id: number;
    date: string;
    company: string;
    role: string;
    description: string;
}

export interface ExpProps {
    type: string
    experiences: Experience[]
}