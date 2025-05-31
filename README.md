# 📅 Desafio “50 Projetos na Nuvem” — Projeto 1: Site Estático no Amazon S3

Hoje dou o pontapé inicial de uma série com **50 projetos práticos de Cloud Computing**, indo do básico ao avançado.

A ideia é explorar serviços da **AWS**, **GCP** e **Azure**, sempre dentro do **Free Tier** (ou o mais próximo possível disso), construindo **soluções reais**, comentando cada **decisão**, **tecnologia escolhida** e o **impacto prático** de cada escolha.

---

## 🚀 A cada projeto, explico:

1️⃣ O que construí  
2️⃣ Por que escolhi cada serviço  
3️⃣ Os ganhos obtidos — seja em custo, performance, simplicidade, escalabilidade ou segurança  

---

## 🌐 Projeto 1 — Site Estático no Amazon S3

Neste projeto, hospedei um site simples, estático — **meu currículo** — usando o Amazon S3 com Static Website Hosting e algumas configurações essenciais da AWS.

### 💡 Por que usei `us-east-1` em vez de `sa-east-1`?

- 💰 **Preço**: us-east-1 continua sendo a região **mais barata** da AWS  
- 📚 **Documentação**: a maioria dos tutoriais e exemplos da AWS assume essa região como padrão  
- 📶 **Latência**: para um site leve como esse, a diferença de milissegundos é **irrelevante**  
- ➡️ **Trade-off**: economizo mais com **impacto mínimo** — o projeto é para fins didáticos.

---

## ⚙️ Passo a passo que segui:

- Criei o bucket `daniel-azevedo-resume-tech` (nomes de bucket são globais e únicos — usei minúsculas e sem espaços).
- Desativei o **bloqueio de acesso público**, permitindo que qualquer pessoa visualize o site pela URL pública.
- **ACLs desativadas** — uso de **bucket policy moderna**, como a AWS recomenda.
- Ativei o **versionamento** para manter histórico automático de versões dos arquivos.
- Configurei o **Static Website Hosting**, com `index.html` como página inicial.
- Criei um segundo bucket (`daniel-azevedo-resume-tech-logs`) para armazenar **logs de acesso** — **sem acesso público e sem versionamento**.

---

## 🔐 Bucket Policy para leitura pública

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

---

## ☁️ Upload realizado

Fiz upload do `index.html`, imagens e demais arquivos estáticos do site.

✅ **Endpoint público gerado**:  
http://daniel-azevedo-resume-tech.s3-website-us-east-1.amazonaws.com/

---

## 💸 AWS Budget

Criei um **AWS Budget** chamado `FreeTier-Control`, com limite de **US$ 1**.  
Assim, recebo **alertas por e-mail** se sair da camada gratuita.

---

## 🧠 Fatos rápidos sobre o Amazon S3

- Buckets **não têm pastas reais** — são apenas **prefixos no nome** dos objetos.
- Exemplo: `img/foto.png` é só um nome, não uma pasta real.
- Cada objeto pode ter até **5 TB**.
- O número de objetos por bucket é **virtualmente ilimitado**.
- Regras de nomes de bucket: letras minúsculas, hífens, entre 3-63 caracteres, sem espaços.

---

## 🔗 Me acompanhe no LinkedIn

[https://www.linkedin.com/in/daniel-azevedo-maia/](https://www.linkedin.com/in/daniel-azevedo-maia/)

