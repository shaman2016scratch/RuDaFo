// RuDaFo
RuDaFo = {
  "ToJson": function(f, r) {
    if (f === 'object') {
      RuDaFo.data.i = r.split(';'); RuDaFo.data.i4 = {}; for(RuDaFo.data.i2 = 0; RuDaFo.data.i2 < RuDaFo.data.i.length; RuDaFo.data.i2++) { RuDaFo.data.i3 = RuDaFo.data.i[RuDaFo.data.i2]; RuDaFo.data.i5 = RuDaFo.data.i3.split(':'); RuDaFo.data.i4[RuDaFo.data.i5[0]] = RuDaFo.data.i5[1]; }; return RuDaFo.data.i4;
    } else if (f === 'array') {
      RuDaFo.data.i = r.split('&'); RuDaFo.data.i4 = []; for(RuDaFo.data.i2 = 0; RuDaFo.data.i2 < RuDaFo.data.i.length; RuDaFo.data.i2++) { RuDaFo.data.i3 = RuDaFo.data.i[RuDaFo.data.i2];RuDaFo.data.i4.push = RuDaFo.data.i3; }; return RuDaFo.data.i4;
    } else {
      console.error(`RuDaFo error: Not RuDaFo type name '${f}'`)
    }
  },
  "data": {},
  "FromJson": function(f, r) {
    if (f === 'object') {
      RuDaFo.data.i = r; RuDaFo.data.i4 = ""; RuDaFo.data.i3 = Object.keys(RuDaFo.data.i); for(RuDaFo.data.i2 = 0; RuDaFo.data.i2 < RuDaFo.data.i3.length; RuDaFo.data.i2++) { RuDaFo.data.i5 = RuDaFo.data.i[RuDaFo.data.i3[RuDaFo.data.i2]]; RuDaFo.data.i4 = `${RuDaFo.data.i4}${RuDaFo.data.i3[RuDaFo.data.i2]}:${RuDaFo.data.i5};` }; return RuDaFo.data.i4
    } else if (f === 'array') {
      RuDaFo.data.i = r; RuDaFo.data.i4 = ""; for(RuDaFo.data.i2 = 0; RuDaFo.data.i2 < RuDaFo.data.i.length; RuDaFo.data.i2++) { RuDaFo.data.i4 = `${RuDaFo.data.i4}${RuDaFo.data.i[RuDaFo.data.i2]}&` }; return RuDaFo.data.i4
    } else {
      console.error(`RuDaFo error: Not RuDaFo type name '${f}'`)
    }
  },
}
