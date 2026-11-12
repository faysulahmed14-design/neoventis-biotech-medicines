# Neoventis Medicines

A fast, clean medicine catalog website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Cloudinary**, **WhatsApp Click-to-Chat**, and ready for **Vercel** deployment.

- **No payment gateway**
- **No prices displayed** (only product picture & name)
- **Direct WhatsApp ordering** on every product card

---

## 1. Configure Environment Variables

Open `.env.local` and set your real WhatsApp number (with country code, digits only) and optional Cloudinary cloud name:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=88017XXXXXXXX
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```

---

## 2. Add Products & Cloudinary Images

Edit `src/data/medicines.ts` to add or update medicines.

In the `image` field, you can use:
1. A full Cloudinary URL:
   `https://res.cloudinary.com/<cloud-name>/image/upload/v123456/neoventis/product.jpg`
2. A Cloudinary public ID (if `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is set):
   `neoventis/product`
3. A local image inside `public/images/medicines/`.

`src/lib/cloudinary.ts` automatically adds `f_auto,q_auto,w_700,c_limit` optimization parameters to Cloudinary URLs.

---

## 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add `NEXT_PUBLIC_WHATSAPP_NUMBER` and `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` under **Project Settings → Environment Variables**.
4. Click **Deploy**.
