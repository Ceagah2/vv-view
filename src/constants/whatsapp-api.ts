export const whatsappMessage = (title: string, date: string) => {
  const URL = 'https://api.whatsapp.com/send?phone=5512981737111&'
  const text = `text=Ola Ana ! Gostaria de saber mais sobre a viagem ${title}, do dia ${date}.`

  return URL + text
}