import { NextApiRequest, NextApiResponse } from 'next'
import { IncomingWebhook } from '@slack/webhook'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = process.env.SLACK_WEBHOOK_URL
  const body = req.body
  const fields = []

  for (const k in body) {
    if (body[k] === '') {
      delete body[k]
    } else {
      fields.push({
        type: 'mrkdwn',
        text: `*${k}:*\n${body[k]}`,
      })
    }
  }

  if (typeof body === 'undefined') {
    res.writeHead(400).end('Invalid body: message')
    return
  }

  if (req.method != 'POST') {
    res.writeHead(405).end('Method Not Allowed')
    return
  }

  if (url) {
    const webhook = new IncomingWebhook(url)

    const payload = {
      // slackに送信する内容
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'フォームお問い合わせ',
          },
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: `*姓:*\n${body['firstName']}` },
            { type: 'mrkdwn', text: `*名:*\n${body['lastName']}` },
            { type: 'mrkdwn', text: `*メールアドレス:*\n${body['email']}` },
            { type: 'mrkdwn', text: `*ご相談内容:*\n${body['details']}` },
            { type: 'mrkdwn', text: `*ご予算の上限:*\n${body['budget']}` },
            { type: 'mrkdwn', text: `*ご契約形態:*\n${body['contract']}` },
          ],
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*お問い合わせ種別:*\n - ${body['categories']}`,
            },
            { type: 'mrkdwn', text: `*会社名:*\n - ${body['company'] ?? 'Empty'}` },
            {
              type: 'mrkdwn',
              text: `*paletto.をお知りになった経緯を教えてください:*\n - ${body['background'] ?? 'Empty'}`,
            },
            {
              type: 'mrkdwn',
              text: `*ご依頼予定のWebサイトやサービス、またはアプリストアのURL:*\n - ${body['request'] ?? 'Empty'}`,
            },
            {
              type: 'mrkdwn',
              text: `*完了期日の目安:*\n - ${body['fixed'] ?? 'Empty'}`,
            },
            {
              type: 'mrkdwn',
              text: `*お問い合わせ内容:*\n - ${body['inquery']}`,
            },
          ],
        },
      ],
    }

    if (req.method === 'POST') {
      await webhook.send(payload)
      res.writeHead(201).end('Created')
    }
  }
}
