
export function ObjectEqual (data1: any, data2: any) {
  const digest1 = JsonDigest(data1)
  const digest2 = JsonDigest(data2)

  return digest2 === digest1
}

export function JsonDigest (data: any) {
  return JSON.stringify(data)
}

export async function DigestMessage (message: any) {
  if (window.crypto && window.crypto.subtle && window.crypto.subtle.digest) {
    const msgUint8 = new TextEncoder().encode(message)
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgUint8)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    return hashHex
  }
  return undefined
}