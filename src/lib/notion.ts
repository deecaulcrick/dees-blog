import { Client } from '@notionhq/client';


const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

export interface Book {
    id: string;
    title: string;
    author?: string;
    status?: string;
    rating?: number;
    cover?: string;
    // Add other properties from your database
}

export async function getBooks(): Promise<Book[]> {
    const response = await notion.dataSources.query({
        data_source_id: process.env.NOTION_DATABASE_ID!,
        sorts: [
            {
                property: 'Title', // Adjust to your property name
                direction: 'ascending',
            },
        ],
    });
    console.log(response.results);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((page: any) => {
        const props = page.properties;

        return {
            id: page.id,
            title: props.Title?.title[0]?.plain_text || 'Untitled',
            author: props.Author?.select?.name || '',
            status: props.Status?.status?.name || '',
            rating: props.Rating?.number || 0,
            url: props.URL?.url || '',
            cover: props.Cover?.files[0]?.external?.url || '',
            date_finished: props.Date?.date?.start || '',
            genre: props.Genre?.multi_select.map((tag: { name: string }) => tag.name) || [],
            // Map other properties as needed
        };
    });
}
