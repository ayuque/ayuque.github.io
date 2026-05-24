# Magaly Cusipuma Ayuque - portfolio web trilingüe

Sitio web estático de alto nivel, listo para abrir localmente o publicar en GitHub Pages, Netlify, Vercel o cualquier hosting estático.

## Contenido incluido

- Página principal `index.html` con diseño responsive, modo claro/oscuro y selector de idioma ES / EN / FR.
- Secciones: hero, especialidad, trabajos realizados, publicaciones, trabajos futuros, trayectoria, formación, cursos/logros, skills, idiomas y contacto.
- Foto profesional en `assets/magaly-cusipuma-headshot.png`.
- CV descargable en `assets/Magaly_Cusipuma_Ayuque_CV.pdf`.
- Referencias profesionales indicadas como disponibles a solicitud, para no publicar emails de terceros.

## Cómo editar publicaciones, trabajos y futuro

Toda la información editable está dentro de `index.html`, en el bloque JavaScript:

```js
const DATA = {
  works: [...],
  publications: [...],
  future: [...]
}
```

Para agregar un nuevo trabajo realizado, duplica una tarjeta dentro de `DATA.works` y completa:

- `category`: `professional`, `research`, `field` o `training`
- `year`
- `location`
- `organization`
- `title`: con traducciones `es`, `en`, `fr`
- `problem`: con traducciones `es`, `en`, `fr`
- `contribution`: con traducciones `es`, `en`, `fr`
- `tools`: lista de herramientas o keywords

Para agregar una nueva publicación, duplica un objeto dentro de `DATA.publications` y completa:

- `status`: `published` o `future`
- `type`: `journal`, `conference`, `manuscript` o `technical`
- `year`
- `authors`
- `title`
- `venue`
- `note`

Para agregar trabajos futuros, duplica un objeto dentro de `DATA.future` y completa:

- `phase`
- `title`
- `body`
- `deliverables`

## Publicación rápida

1. Sube la carpeta completa a un repositorio.
2. Activa GitHub Pages, Netlify o Vercel.
3. Asegúrate de mantener la carpeta `assets` junto a `index.html` para que carguen la foto y el CV.

## Recomendación

Cuando tengas DOI, enlaces a papers, repositorios, imágenes de proyectos o mapas, se pueden convertir las tarjetas en enlaces visuales y agregar botones por proyecto.
