FROM nginx:alpine

# Configuração customizada otimizada para alto tráfego e compressão gzip
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos da página para a pasta do Nginx
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
