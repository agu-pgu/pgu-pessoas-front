# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
<h5 align="center">Necessário para rodar este projeto no sevidor CEGINS:</h5>


# Parte 1º Preparando a aplicação no apache2 
```bash
 #vi /etc/apache2/sites-available/pgu-pessoas-front.conf
  <VirtualHost *:8092>

        DocumentRoot /var/www/pgu-pessoas-front

        ErrorLog /var/www/pgu-pessoas-front/logs/error.log
        CustomLog /var/www/pgu-pessoas-front/logs/access.log combined

</VirtualHost>
# a2ensite pgu-pessoas-front.conf               
```
# Parte 2º configurando as portas aplicação no apache2 
```bash
  #vi  /etc/apache2/ports.conf             
```
# Instale as instancias do projeto front end
```bash
  sh 'npm i'                
```
# Execute a aplicação no servidor
```bash
  sh 'npm run build'
```
# Copair a aplicação no servidor
```bash
  cp diretorio/dist/* /var/www/pgu-pessoas-front
```
# reinciar a aplicação 
```bash
  # /etc/init.d/apache2 restart
```

### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:
- [React](https://pt-br.reactjs.org/)
