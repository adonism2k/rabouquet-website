# 🚀 Deployment Guide - Rabouquet Website

## Manual Deployment via GitHub Actions

Website ini menggunakan **manual deployment workflow** yang dapat kamu trigger melalui button di GitHub Actions.

### ✨ Cara Deploy:

#### 1️⃣ Via GitHub Web Interface

1. **Buka Repository di GitHub**
   - Go to: https://github.com/adonism2k/rabouquet-website

2. **Navigate to Actions Tab**
   - Click tab **"Actions"** di menu atas
   - Pilih workflow **"Deploy to Vercel"** di sidebar kiri

3. **Trigger Deployment**
   - Click button **"Run workflow"** (di kanan atas)
   - Pilih options:
     - **Branch:** main (atau branch lain yang ingin di-deploy)
     - **Environment:**
       - `production` - Deploy ke production Vercel
       - `preview` - Deploy preview environment
     - **Run build tests:**
       - ✅ Checked - Jalankan build test dulu (recommended)
       - ❌ Unchecked - Skip test, langsung deploy
   - Click **"Run workflow"** hijau untuk confirm

4. **Monitor Progress**
   - Workflow akan muncul di list dengan status running (🟡)
   - Click workflow run untuk lihat real-time logs
   - Tunggu sampai selesai (✅ success atau ❌ failed)

#### 2️⃣ Via GitHub CLI (gh)

```bash
# Deploy production dengan build tests
gh workflow run "Deploy to Vercel" \
  --ref main \
  -f environment=production \
  -f run_tests=true

# Deploy preview tanpa tests (untuk quick preview)
gh workflow run "Deploy to Vercel" \
  --ref main \
  -f environment=preview \
  -f run_tests=false

# Check workflow status
gh run list --workflow="Deploy to Vercel"

# View logs dari latest run
gh run view --log
```

## 📋 Workflow Options

### Environment
- **production** (default)
  - Deploy ke production domain
  - Triggers Vercel production deployment
  - Recommended untuk release

- **preview**
  - Deploy ke preview environment
  - Testing purposes
  - Tidak affect production

### Run Tests
- **true** (default) ✅ Recommended
  - Menjalankan `npm run build` untuk test
  - Pastikan build berhasil sebelum deploy
  - Gagal build = deployment dibatalkan

- **false**
  - Skip build test
  - Langsung trigger Vercel deployment
  - Use only jika yakin code sudah OK

## 🔍 Monitoring Deployment

### GitHub Actions Summary
Setelah workflow selesai, kamu bisa lihat summary:
- ✅ Environment yang di-deploy
- ✅ Branch & commit SHA
- ✅ Build test status
- ✅ Who triggered the deployment
- ✅ Timestamp

### Vercel Dashboard
1. Open [Vercel Dashboard](https://vercel.com/dashboard)
2. Select rabouquet-website project
3. Check deployment status & logs
4. View deployed URL

## ⚠️ Important Notes

### Kapan Harus Deploy?
❌ **TIDAK lagi auto-deploy** saat:
- Push ke main branch
- Create pull request
- Merge PR

✅ **HANYA deploy** saat:
- Kamu manually trigger via button
- Menggunakan gh CLI command
- Via API workflow dispatch

### Best Practices
1. **Selalu run tests** sebelum production deploy
2. **Test di local** dulu: `npm run build` dan `npm run preview`
3. **Check preview** deployment sebelum production
4. **Coordinate** dengan tim jika ada yang lagi deploy
5. **Monitor** Vercel logs untuk pastikan deployment sukses

## 🐛 Troubleshooting

### Deployment Failed?
1. Check GitHub Actions logs untuk error details
2. Pastikan build berhasil di local: `npm run build`
3. Check Vercel dashboard untuk deployment errors
4. Verify Vercel deployment hook URL masih valid

### Build Test Failed?
```bash
# Test locally
npm ci
npm run build

# Fix errors
# Then commit & push
# Trigger workflow lagi
```

### Workflow Tidak Muncul?
- Pastikan file `.github/workflows/vercel-deploy.yml` ada
- Check branch yang kamu pilih sudah punya workflow file
- Refresh GitHub Actions page

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment Documentation](https://vercel.com/docs/deployments/overview)
- [GitHub CLI Workflow Commands](https://cli.github.com/manual/gh_workflow)

---

**Last Updated:** 2026-01-12
**Maintained by:** Adon
