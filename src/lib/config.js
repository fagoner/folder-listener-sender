const config = {
    path: {
        base: "demoFolder",
    },
    filter: {
        fileExtensionFilter: "*.pdf",
        fileNameRegexp: /(fel|factura)(\s*)(\d+)(\s*)\.(\s*)pdf(\s*)$/i,
        sectionBien: /((\d+))(Bien)/i,
        sectionUniPreciosIva: /(\s)Uni((\d)+((,)(\d+))*((\.)\d*)){2}IVA:\s((\d)+((,)(\d+))*((\.)\d*)){1}/,
        delimiter: "<--space-anchor-->"
    }
}

module.exports = config