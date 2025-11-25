// RuDaFo
RuDaFo = {
  "ToJson": function(f, r) {
    if (f === 'object') {
      RuDaFo.data.i = r.split(';')
    } else if (f === 'array') {
      RuDaFo.data.i = r.split('&')
    } else {
      console.error(`RuDaFo error: Not RuDaFo type name '${f}'`)
    }
  },
  "data": {},
  "FromJson": function(f, r) {
    if (f === 'object') {
      RuDaFo.data.i = r
    } else if (f === 'array') {
      RuDaFo.data.i = r
    } else {
      console.error(`RuDaFo error: Not RuDaFo type name '${f}'`)
    }
  },
}
