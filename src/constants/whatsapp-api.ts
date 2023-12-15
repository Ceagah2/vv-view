export const whatsappMessage = (title: string, date: string) => {
  const URL = 'https://api.whatsapp.com/send?phone=5512992049186&'
  const text = `text=Gostaria de saber mais sobre a viagem ${title}, do dia ${date}.`

  return URL + text
}

export const whatsAppGenericMessage = (message: string) => {
  const URL = 'https://api.whatsapp.com/send?phone=5512992049186&'
  const text = `text=${message}`

  return URL + text
}