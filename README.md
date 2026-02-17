# DRELF - Meta Marketing API & CURL Guide

This project utilizes the Meta Graph API for Instagram and Facebook integration. This document serves as a reference for the `curl` commands required to manage Ad accounts and Instagram connections.

## 🚀 Key CURL Commands

### 1. Identify Connected Instagram Account (via Page ID)
Use this to find the Instagram Business Account ID associated with your Facebook Page.
```bash
curl -i -X GET 
  "https://graph.facebook.com/v19.0/<PAGE_ID>/instagram_accounts?fields=id,username&access_token=<ACCESS_TOKEN>"
```
*Efficient version using -G:*
```bash
curl -G 
  -d "fields=id,username" 
  -d "access_token=<ACCESS_TOKEN>" 
  "https://graph.facebook.com/v19.0/<PAGE_ID>/instagram_accounts"
```

### 2. Identify Ad Account Connected IG Accounts
Used to verify which Instagram accounts are eligible for running ads on a specific Ad Account.
```bash
curl -G 
  -d "access_token=<ACCESS_TOKEN>" 
  "https://graph.facebook.com/v19.0/act_<AD_ACCOUNT_ID>/connected_instagram_accounts"
```

### 3. Check Pixel Status
Verify the Pixel configuration (Referencing ID: `1749197952320359` found in `Pixel.tsx`).
```bash
curl -G 
  -d "access_token=<ACCESS_TOKEN>" 
  "https://graph.facebook.com/v19.0/1749197952320359"
```

---

## 🛠 Efficient CURL Practices
*   **`-G` / `--get`**: Use this for GET requests to keep data flags (`-d`) readable.
*   **`-i`**: Include protocol headers in the output (useful for debugging rate limits).
*   **`-s`**: Silent mode (useful when piping to `jq`).
*   **`jq`**: Always pipe to `jq` if available to parse JSON response: `curl ... | jq '.'`.

## 📜 Development Log (CURL History)
The following commands were requested/performed to identify IDs for the **Drelf Collagen Ads** (Sleep-Deprived Mom, Pre-Event Panic, etc.):

1.  **Requesting IG ID:** 
    `curl -G -d "access_token=<TOKEN>" -d "fields=id,username" "https://graph.facebook.com/v19.0/<PAGE_ID>/instagram_accounts"`
2.  **Mapping Ad Account Connections:** 
    `curl -G -d "access_token=<TOKEN>" "https://graph.facebook.com/v19.0/act_<ID>/connected_instagram_accounts"`

---
*Note: Ensure your Access Token has `ads_management` and `instagram_basic` permissions.*
