# 50DaysOfCloud — Projeto 01/50

## 🌐 Site Estático no Amazon S3

Este é o repositório do **Projeto 01** do desafio #50DaysOfCloud. Neste projeto, hospedei meu currículo como um site estático na AWS utilizando o Amazon S3, e posteriormente automatizei o deploy com GitHub Actions (CI/CD).

---

## 🔹 Etapa 1 — Criação do Bucket S3

- Nome do bucket: `daniel-azevedo-resume-tech`
- Nomes de buckets no S3 são globais e únicos (visíveis publicamente), portanto usei letras minúsculas e nome criativo.
- Desativei o **bloqueio de acesso público**, permitindo acesso por URL.
- **ACLs** não foram ativadas (obsoletas), utilizei política de bucket moderna e segura.
- Ativei o **versionamento** para manter o histórico de versões.
- Configurei o **Static Website Hosting** com `index.html` como documento inicial.
- Para logs, criei um segundo bucket exclusivo: `daniel-azevedo-resume-tech-logs`.

### 🔐 Política do bucket para leitura pública:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::daniel-azevedo-resume-tech/*"
    }
  ]
}
```

- Fiz upload do `index.html`, imagens e arquivos do site.
- Endpoint gerado: (removido por segurança/custos).

---

## 💡 Por que usei a região us-east-1?

- **Preço**: mais barata que `sa-east-1`.
- **Documentação**: maioria dos tutoriais assume `us-east-1` como padrão.
- **Latência**: irrelevante para site leve.
- **Trade-off**: aceito latência mínima em troca de economia.

---

## 🧠 Fatos rápidos sobre S3

- Buckets não têm pastas reais — apenas prefixos.
- Ex: `img/foto.png` é só um nome.
- Cada objeto pode ter até **5 TB**.
- Número de objetos por bucket: **ilimitado**.

---

## 🔹 Etapa 2 — AWS Budget

- Criei um orçamento (budget) chamado `FreeTier-Control`, com **limite de US$ 1**, para receber alertas caso ultrapasse o Free Tier.

---

## 🔹 Etapa 3 — CI/CD com GitHub Actions

Objetivo: **automatizar deploy no S3 sempre que houver push na branch `main`**.

### 📌 IAM User

- Criei um usuário IAM para uso exclusivo do GitHub Actions.
- Marquei como "Serviço de terceiros".
- Anexei a política `AmazonS3FullAccess` (fins didáticos — poderia ser mais restrita).

### 🔐 Secrets no GitHub

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET_NAME`

### ⚙️ Arquivo `.github/workflows/deploy.yml`

- Aciona no push na `main`
- Faz checkout do código
- Instala AWS CLI
- Autentica com secrets
- Executa `aws s3 sync` com o bucket

---

## ✅ Resultado

- Toda vez que faço push no repositório, o site é **atualizado automaticamente** no S3.
- O GitHub cria uma **VM temporária**, instala tudo e faz o deploy em segundos.
- Posso acompanhar tudo em tempo real pela aba “Actions”.

---

## 📌 Conclusão

Projeto simples, gratuito e essencial como ponto de partida para o mundo da cloud com AWS. 

Pronto para o próximo desafio do #50DaysOfCloud!

---

## 📎 Tags

`#50DaysOfCloud` `#AWS` `#S3` `#StaticWebsiteHosting` `#CI/CD` `#GitHubActions` `#CloudComputing`
