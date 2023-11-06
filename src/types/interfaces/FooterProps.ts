interface ToolUsed {
    id: number;
    label: string;
    routePath: string;
}

interface Contact {
    id: number;
    label: string;
}

export interface FooterProps {
    ToolsUsed: ToolUsed[];
    Contacts: Contact[];
}