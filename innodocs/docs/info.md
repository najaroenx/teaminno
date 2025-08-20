---
sidebar_position: 1
---

# Information

## 1.DLT Points API

## Features

แพลตฟอร์มแต้มบนบล็อกเชนสำหรับร้านค้า (Merchant) และลูกค้า (Customer) ใช้งานง่ายแต่ปลอดภัย รองรับตั้งแต่การออกแต้ม โอนแต้ม จนถึงดูประวัติธุรกรรม

---

## สำหรับผู้ใช้งาน/ธุรกิจ (Non-Developer)

- **สร้างร้านค้าและกระเป๋าแต้มอัตโนมัติ**
  - เปิด Merchant ใหม่ ระบบจะสร้าง **Wallet** ให้ทันที
- **ออกแต้ม/เติมแต้มให้ลูกค้าได้**
  - ใช้แต้มเป็นรางวัล/โปรโมชันได้ (เช่น สมัครสมาชิกใหม่ รับ 150 แต้ม)
- **ลูกค้าโอนแต้มให้กันได้**
  - ส่งแต้มระหว่างลูกค้าด้วยกัน (C2C) ใช้เป็นของขวัญหรือกิจกรรมชุมชน
- **ดูยอดคงเหลือและประวัติธุรกรรม**
  - เช็กยอดแต้มคงเหลือ และดูรายการย้อนหลังตามช่วงเวลา
- **ความปลอดภัย**
  - ทุกคำสั่งใช้ **API Key**, ทุกธุรกรรมบันทึกบนบล็อกเชน, มี **Idempotency-Key** กันการกดซ้ำ
- **ตรวจสถานะธุรกรรมแบบเรียลไทม์**
  - ดูสถานะ `PENDING → CONFIRMED/FAILED` และรายละเอียดบนเชน
- **รองรับการขยายระบบ**
  - โครงสร้าง API แบบ REST ใช้งานกับระบบเดิมได้ง่าย (e.g., CRM, POS, Mobile App)

---

## สำหรับนักพัฒนา (Developer)

> Base URL: `https://api.example.com`  
> Auth: `Authorization: Bearer <API_KEY>`  
> Idempotency (write ops): `Idempotency-Key: <unique-key>`

### Feature → API Mapping (10 Routes)

| Feature                  | Method & Path                                                                                                 | ใช้ทำอะไร                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| สร้าง Merchant + Wallet   | <span style={{color: 'orange', fontWeight: 'bold'}}>POST</span> `/v1/merchants`                               | ลงทะเบียนร้านค้าใหม่ สร้างกระเป๋าแต้มให้ทันที |
| ดูข้อมูล Merchant           | <span style={{color: 'green', fontWeight: 'bold'}}>GET</span> `/v1/merchants/{merchantId}`                    | ดึงข้อมูลร้านค้าและกระเป๋า                |
| สร้าง Customer + Wallet   | <span style={{color: 'orange', fontWeight: 'bold'}}>POST</span> `/v1/customers`                               | ผูกลูกค้ากับร้านค้า พร้อมกระเป๋าแต้ม         |
| ดูข้อมูล Customer           | <span style={{color: 'green', fontWeight: 'bold'}}>GET</span> `/v1/customers/{customerId}`                    | ดึงข้อมูลลูกค้าและกระเป๋า                 |
| ออก/เติมแต้มให้ลูกค้า         | <span style={{color: 'orange', fontWeight: 'bold'}}>POST</span> `/v1/wallets/{walletId}/issue`                | เพิ่มแต้มเข้ากระเป๋าลูกค้า                 |
| โอนแต้ม C2C               | <span style={{color: 'orange', fontWeight: 'bold'}}>POST</span> `/v1/transfers`                               | โอนแต้มระหว่างลูกค้า                    |
| ให้แต้มจาก Merchant → ลูกค้า | <span style={{color: 'orange', fontWeight: 'bold'}}>POST</span> `/v1/transfers/merchant`                      | มอบแต้มเป็นรางวัล/โปรโมชัน              |
| ดูยอดคงเหลือ               | <span style={{color: 'green', fontWeight: 'bold'}}>GET</span> `/v1/wallets/{walletId}/balance?currency=POINT` | ตรวจยอดแต้มคงเหลือ                    |
| ค้นหารายการธุรกรรม         | <span style={{color: 'green',fontWeight: 'bold'}}>GET</span> `/v1/transactions?...`                           | ค้นหารายการธุรกรรม                    |
| ดูธุรกรรมตาม ID            | <span style={{color: 'green', fontWeight: 'bold'}}>GET</span> `/v1/transactions/{txId}`                       | รายละเอียดธุรกรรม                     |

> สถานะธุรกรรม: `PENDING`, `CONFIRMED`, `FAILED`  
> ประเภทธุรกรรมหลัก: `ISSUE`, `TRANSFER`, `MERCHANT_GRANT`, `REVERSAL`

---

## Quick Start (Dev)

### 1) สร้าง Merchant

```bash
curl -X POST https://api.example.com/v1/merchants \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name":"Acme Store","contactEmail":"ops@acme.com"}'
```

---

<!-- ---
id: camara-blockchain-address-overview
title: Camara – Blockchain Public Address API (Overview)
sidebar_label: Blockchain Address
--- -->

# 2.Camara – Blockchain Public Address API

API นี้เปิดให้ **ค้นหา / ผูก / ยกเลิกผูก** _Blockchain Public Address_ กับ **เบอร์โทรศัพท์ (E.164)**  
ใช้เพื่อให้ผู้ใช้โอน/รับสินทรัพย์ดิจิทัลได้ง่ายขึ้นโดยอ้างอิงหมายเลขโทรศัพท์ แทนการพิมพ์ address ยาว ๆ

- **Retrieve (ค้นหา address จากเบอร์)**: ใช้ได้ทั้ง **2-legged** และ **3-legged** (ไม่จำเป็นต้องเป็นเบอร์ของ `sub`) :contentReference[oaicite:1]{index=1}
- **Bind / Unbind**: ต้องใช้ **3-legged** และเบอร์ในคำขอ **ต้องเป็นของ `sub`** ที่ออก access token นั้น (ฝั่งโอเปอเรเตอร์ต้องตรวจสอบ) :contentReference[oaicite:2]{index=2}
- รองรับ **การพิสูจน์ความเป็นเจ้าของ address แบบเสริม** ด้วย `nonce` + `signature` (ผู้ใช้เซ็นนอกเครือข่าย แล้วแนบมากับคำขอ bind) :contentReference[oaicite:3]{index=3}

> **Server base** (ตัวอย่างในสเปค): `{apiRoot}/blockchain-public-address/v0.3rc1` :contentReference[oaicite:4]{index=4}

---

## Key Features (สำหรับ Non-Dev)

- ค้นหา blockchain address ของปลายทางด้วย **เบอร์โทร** → โอน/ขอรับสินทรัพย์ได้สะดวกขึ้น
- ผูก address หลายรายการกับเบอร์เดียวกันได้ (เพิ่มรายการใหม่ ไม่ทับของเดิม) :contentReference[oaicite:5]{index=5}
- ผู้ใช้ควบคุมสิทธิ์การผูก/ยกเลิกผูกด้วย **3-legged consent** (สอดคล้อง privacy-by-design) :contentReference[oaicite:6]{index=6}
- (ทางเลือก) บังคับยืนยันว่าเจ้าของเบอร์ “เป็นเจ้าของ address จริง” โดยให้ผู้ใช้ **เซ็น nonce** ก่อน bind :contentReference[oaicite:7]{index=7}

---

## Endpoints & Scopes

> ใช้ MDX แทรกสี method ให้เห็นชัดเจน

| Feature | Method & Path | Scope | อธิบายสั้น |
|---|---|---|---|
| ค้นหา address จากเบอร์ | <span style={{color: 'orange'}}>POST</span> `/blockchain-public-addresses/retrieve-blockchains` | `blockchain-public-address:read` | คืนรายการ address ทั้งหมดที่ผูกกับเบอร์ที่ระบุ (ใช้ได้ทั้ง 2-legged/3-legged) :contentReference[oaicite:8]{index=8} |
| ผูก address ↔ เบอร์ | <span style={{color: 'orange'}}>POST</span> `/blockchain-public-addresses` | `blockchain-public-address:create` | ผูก address ใหม่ให้เบอร์ของผู้ใช้ (ต้อง 3-legged; รองรับ nonce/signature) :contentReference[oaicite:9]{index=9} |
| ยกเลิกการผูก (ลบรายการ) | <span style={{color: 'red'}}>DELETE</span> `/blockchain-public-addresses/{id}` | `blockchain-public-address:delete` | ลบความสัมพันธ์ผูกของรายการตาม `id` (ต้อง 3-legged; ต้องเป็นของ `sub`) :contentReference[oaicite:10]{index=10} |

**Headers สำคัญ**

- `x-correlator` (string) — สำหรับการ trace ระหว่างบริการ :contentReference[oaicite:11]{index=11}

---

## รูปแบบข้อมูลสำคัญ

- **PhoneNumber**  
  - `phoneNumber` (string, E.164, เช่น `+66891234567`) :contentReference[oaicite:12]{index=12}
- **Bind Request**  
  - `phoneNumber` (E.164), `blockchainPublicAddress` (string), `blockchainNetworkId` (string)  
  - (ออปชัน) `nonce`, `signature` สำหรับ enforcement ความเป็นเจ้าของ address :contentReference[oaicite:13]{index=13}
- **blockchainNetworkId**  
  - รูปแบบ **`<ecosystem>:<id>`** เช่น `evm:1` (Ethereum mainnet), `evm:137` (Polygon), `evm:42220` (Celo) ฯลฯ  
  - ระบบยังนิยาม L1 อื่น ๆ เช่น `bitcoin`, `solana`, `cardano` (ไม่มี `<id>` ต่อท้าย) :contentReference[oaicite:14]{index=14}

---

## ตัวอย่างคำขอ/คำตอบ

### 1) ค้นหา address จากเบอร์

**POST** `/blockchain-public-addresses/retrieve-blockchains`

```json
{ "phoneNumber": "+66891234567" }
```

---
