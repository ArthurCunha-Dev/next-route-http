import { NextRequest } from "next/server"
import { headers } from 'next/headers'

export async function GET(request: NextRequest) {

    const requestHeaders = new Headers(request.headers)
    const headerList = headers()

    console.log(requestHeaders.get('Authorization'))
    console.log(headerList.get('Authorization'))
    
    return new Response('Profile Route')
}
