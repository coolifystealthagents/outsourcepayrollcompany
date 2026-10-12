#!/usr/bin/env python3
import json,textwrap
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
root=Path(__file__).resolve().parents[2];m=json.loads((root/'publishing/2026-10-12/manifest.json').read_text());out=root/'public/oct12-heroes';out.mkdir(parents=True,exist_ok=True)
fp=next(p for p in ['/System/Library/Fonts/Supplemental/Arial Bold.ttf','/System/Library/Fonts/Supplemental/Georgia Bold.ttf'] if Path(p).exists())
for i,a in enumerate(m['articles']):
 b=[(10,42,27),(18,40,55),(43,31,48),(48,38,18)][i%4];c=[(39,190,100),(56,189,248),(219,128,214),(245,190,62)][i%4];im=Image.new('RGB',(1200,630),b);d=ImageDraw.Draw(im);d.rectangle((0,0,710,630),fill=tuple(max(0,x-7) for x in b))
 for n in range(7):
  y=55+n*72;x=775+(i*53+n*31)%120;d.rounded_rectangle((x,y,x+260,y+42),8,outline=c,width=3);d.ellipse((x-34,y+8,x-14,y+28),fill=c)
 label='PAYROLL OPERATIONS GUIDE' if a['section']=='Blog' else 'PAYROLL RESEARCH';sm=ImageFont.truetype(fp,23);d.rounded_rectangle((55,48,475,90),7,fill=c);d.text((70,60),label,font=sm,fill=b)
 size=50
 while True:
  f=ImageFont.truetype(fp,size);lines=textwrap.wrap(a['title'],30)
  if len(lines)<=3 and max(d.textbbox((0,0),z,font=f)[2] for z in lines)<=610:break
  size-=2
 y=148
 for z in lines:d.text((55,y),z,font=f,fill=(248,248,240));y+=size+14
 d.text((55,535),'Outsource Payroll Company',font=ImageFont.truetype(fp,22),fill=(248,248,240));d.text((55,570),'Evidence · owner · receipt',font=sm,fill=c);im.save(root/a['thumbnailPath'],'WEBP',quality=86,method=6)
print(f'Generated {len(m["articles"])} thumbnails')
