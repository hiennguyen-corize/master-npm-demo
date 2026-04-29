# Master NPM Demo

Dự án mẫu hướng dẫn quy trình đóng gói và xuất bản thư viện Node.js lên GitHub Packages thông qua quy trình CI/CD tự động bằng GitHub Actions.

## 🚀 Quy trình phát hành phiên bản mới (Release Flow)

Quy trình phát hành hiện tại được thiết kế theo dạng **"Bán Tự Động" (Semi-automated)**: Bạn quyết định khi nào sẽ ra phiên bản mới, còn lại GitHub Actions sẽ tự động hóa việc xuất bản (Publish).

### Các bước thực hiện:

1. **Thay đổi mã nguồn (Code)**
   Cập nhật mã nguồn thư viện của bạn và commit.
   ```bash
   git add .
   git commit -m "Thêm tính năng mới"
   ```

2. **Đánh dấu phiên bản mới (Bump Version)**
   Thay vì sửa số version trong file `package.json` bằng tay, hãy sử dụng lệnh `npm version` để npm tự động tăng số version, tạo commit, và sinh ra một Git Tag mới.
   ```bash
   # Sửa lỗi nhỏ
   npm version patch 
   
   # Thêm tính năng mới (tương thích ngược)
   npm version minor
   
   # Thay đổi lớn (không tương thích ngược)
   npm version major
   ```
   *Ví dụ: Nếu thư viện đang là `1.0.1`, chạy `npm version patch` sẽ tự động nhảy lên `1.0.2` và tạo tag `v1.0.2`.*

3. **Đẩy mã nguồn và Tag lên GitHub**
   Bạn cần đẩy cả code mới và Tag vừa tạo lên GitHub để kích hoạt con Bot CI/CD.
   ```bash
   git push origin master --tags
   ```

4. **Bot CI/CD tự động xuất bản (Publish)**
   Ngay khi GitHub nhận được Tag có định dạng `v*.*.*`, luồng GitHub Actions (được cấu hình trong `.github/workflows/publish.yml`) sẽ tự động được kích hoạt:
   - Checkout mã nguồn mới nhất.
   - Setup Node.js và thông tin xác thực Registry (sử dụng `GITHUB_TOKEN`).
   - Cài đặt dependencies bằng `npm ci`.
   - Chạy `npm publish` để đẩy thư viện lên **GitHub Packages**.

Bạn có thể theo dõi tiến trình chạy và kết quả của Bot trực tiếp tại tab **Actions** trên repo GitHub của bạn.
