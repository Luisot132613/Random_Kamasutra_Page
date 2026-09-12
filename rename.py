import os

# Caminho da pasta onde estão os arquivos
pasta = "./recortes"

# Lista todos os arquivos .png na pasta
arquivos = [f for f in os.listdir(pasta) if f.endswith(".png")]

# Ordena para garantir consistência
arquivos.sort()

# Renomeia cada arquivo para 01.png, 02.png, ..., 100.png
for i, nome in enumerate(arquivos, start=1):
    novo_nome = f"{i:02}.png"  # dois dígitos, ex: 01, 02...
    caminho_antigo = os.path.join(pasta, nome)
    caminho_novo = os.path.join(pasta, novo_nome)
    os.rename(caminho_antigo, caminho_novo)

print("Arquivos renomeados com sucesso!")
