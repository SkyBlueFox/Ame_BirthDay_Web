// src/pages/Stages.tsx
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

type Slot = { date: string; thumb: string | null }

//early stage
import imgStage270124 from '../assets/stage_photo/stage270124.jpg'
import imgStage280124 from '../assets/stage_photo/stage280124.jpg'
import imgStage040224 from '../assets/stage_photo/stage040224.jpg'
import imgStage100224 from '../assets/stage_photo/stage100224.jpg'
import imgStage110224 from '../assets/stage_photo/stage110224.jpg'
import imgStage180224 from '../assets/stage_photo/stage180224.jpg'
import imgStage250224 from '../assets/stage_photo/stage250224.jpg'
import imgStage090324 from '../assets/stage_photo/stage090324.jpg'
import imgStage100324 from '../assets/stage_photo/stage100324.jpg'
import imgStage160324 from '../assets/stage_photo/stage160324.jpg'
import imgStage170324 from '../assets/stage_photo/stage170324.jpg'
import imgStage240324 from '../assets/stage_photo/stage240324.jpg'
import imgStage300324 from '../assets/stage_photo/stage300324.jpg'
import imgStage060424 from '../assets/stage_photo/stage060424.jpg'
import imgStage070424 from '../assets/stage_photo/stage070424.jpg'
import imgStage200424 from '../assets/stage_photo/stage200424.jpg'
import imgStage260424 from '../assets/stage_photo/stage260424.jpg'
import imgStage270424 from '../assets/stage_photo/stage270424.jpg'
import imgStage280424 from '../assets/stage_photo/stage280424.jpg'
import imgStage040524 from '../assets/stage_photo/stage040524.jpg'
import imgStage050524 from '../assets/stage_photo/stage050524.jpg'
import imgStage120524 from '../assets/stage_photo/stage120524.jpg'
import imgStage180524 from '../assets/stage_photo/stage180524.jpg'
import imgStage190524 from '../assets/stage_photo/stage190524.jpg'
import imgStage250524 from '../assets/stage_photo/stage250524.jpg'
import imgStage020624 from '../assets/stage_photo/stage020624.jpg'
import imgStage080624 from '../assets/stage_photo/stage080624.jpg'
import imgStage150624 from '../assets/stage_photo/stage150624.jpg'
import imgStage160624 from '../assets/stage_photo/stage160624.jpg'
import imgStage210624 from '../assets/stage_photo/stage210624.jpg'
import imgStage220624 from '../assets/stage_photo/stage220624.jpg'
import imgStage230624 from '../assets/stage_photo/stage230624.jpg'
import imgStage300624 from '../assets/stage_photo/stage300624.jpg'
import imgStage010724 from '../assets/stage_photo/stage010724.jpg'
import imgStage060724 from '../assets/stage_photo/stage060724.jpg'
import imgStage070724 from '../assets/stage_photo/stage070724.jpg'
import imgStage130724 from '../assets/stage_photo/stage130724.jpg'
import imgStage140724 from '../assets/stage_photo/stage140724.jpg'
import imgStage200724 from '../assets/stage_photo/stage200724.jpg'
import imgStage210724 from '../assets/stage_photo/stage210724.jpg'
import imgStage270724 from '../assets/stage_photo/stage270724.jpg'
import imgStage030824 from '../assets/stage_photo/stage030824.jpg'
import imgStage040824 from '../assets/stage_photo/stage040824.jpg'
import imgStage100824 from '../assets/stage_photo/stage100824.jpg'
import imgStage110824 from '../assets/stage_photo/stage110824.jpg'
import imgStage180824 from '../assets/stage_photo/stage180824.jpg'
import imgStage240824 from '../assets/stage_photo/stage240824.jpg'
import imgStage250824 from '../assets/stage_photo/stage250824.jpg'
import imgStage310824 from '../assets/stage_photo/stage310824.jpg'
import imgStage010924 from '../assets/stage_photo/stage010924.jpg'
import imgStage070924 from '../assets/stage_photo/stage070924.jpg'
import imgStage080924 from '../assets/stage_photo/stage080924.jpg'
import imgStage150924 from '../assets/stage_photo/stage150924.jpg'
import imgStage210924 from '../assets/stage_photo/stage210924.jpg'
import imgStage230924 from '../assets/stage_photo/stage230924.jpg'
import imgStage280924 from '../assets/stage_photo/stage280924.jpg'
import imgStage290924 from '../assets/stage_photo/stage290924.jpg'
import imgStage051024 from '../assets/stage_photo/stage051024.jpg'
import imgStage131024 from '../assets/stage_photo/stage131024.jpg'
import imgStage191024 from '../assets/stage_photo/stage191024.jpg'
import imgStage201024 from '../assets/stage_photo/stage201024.jpg'
import imgStage261024 from '../assets/stage_photo/stage261024.jpg'
import imgStage271024 from '../assets/stage_photo/stage271024.jpg'
import imgStage031124 from '../assets/stage_photo/stage031124.jpg'
import imgStage091124 from '../assets/stage_photo/stage091124.jpg'
import imgStage101124 from '../assets/stage_photo/stage101124.jpg'
import imgStage161124 from '../assets/stage_photo/stage161124.jpg'
import imgStage171124 from '../assets/stage_photo/stage171124.jpg'
import imgStage231124 from '../assets/stage_photo/stage231124.jpg'
import imgStage241124 from '../assets/stage_photo/stage241124.jpg'
import imgStage301124 from '../assets/stage_photo/stage301124.jpg'
import imgStage011224 from '../assets/stage_photo/stage011224.jpg'
import imgStage081224 from '../assets/stage_photo/stage081224.jpg'
import imgStage141224 from '../assets/stage_photo/stage141224.jpg'
import imgStage151224 from '../assets/stage_photo/stage151224.jpg'
import imgStage201224 from '../assets/stage_photo/stage201224.jpg'
import imgStage221224 from '../assets/stage_photo/stage221224.jpg'
import imgStage050125 from '../assets/stage_photo/stage050125.jpg'
import imgStage110125 from '../assets/stage_photo/stage110125.jpg'
import imgStage120125 from '../assets/stage_photo/stage120125.jpg'
import imgStage250125 from '../assets/stage_photo/stage250125.jpg'
import imgStage260125 from '../assets/stage_photo/stage260125.jpg'

//late stage
import imgStage010225 from '../assets/stage_photo/stage010225.jpg'
import imgStage020225 from '../assets/stage_photo/stage020225.jpg'
import imgStage080225 from '../assets/stage_photo/stage080225.jpg'
import imgStage090225 from '../assets/stage_photo/stage090225.jpg'
import imgStage140225 from '../assets/stage_photo/stage140225.jpg'
import imgStage150225 from '../assets/stage_photo/stage150225.jpg'
import imgStage160225 from '../assets/stage_photo/stage160225.jpg'
import imgStage220225 from '../assets/stage_photo/stage220225.jpg'
import imgStage230225 from '../assets/stage_photo/stage230225.jpg'
import imgStage010325 from '../assets/stage_photo/stage010325.jpg'
import imgStage020325 from '../assets/stage_photo/stage020325.jpg'
import imgStage080325 from '../assets/stage_photo/stage080325.jpg'
import imgStage090325 from '../assets/stage_photo/stage090325.jpg'
import imgStage150325 from '../assets/stage_photo/stage150325.jpg'
import imgStage160325 from '../assets/stage_photo/stage160325.jpg'
import imgStage220325 from '../assets/stage_photo/stage220325.jpg'
import imgStage230325 from '../assets/stage_photo/stage230325.jpg'
import imgStage290325 from '../assets/stage_photo/stage290325.jpg'
import imgStage300325 from '../assets/stage_photo/stage300325.jpg'
import imgStage040425 from '../assets/stage_photo/stage040425.jpg'
import imgStage060425 from '../assets/stage_photo/stage060425.jpg'
import imgStage120425 from '../assets/stage_photo/stage120425.jpg'
import imgStage190425 from '../assets/stage_photo/stage190425.jpg'
import imgStage200425 from '../assets/stage_photo/stage200425.jpg'
import imgStage030525 from '../assets/stage_photo/stage030525.jpg'
import imgStage100525 from '../assets/stage_photo/stage100525.jpg'
import imgStage110525 from '../assets/stage_photo/stage110525.jpg'
import imgStage170525 from '../assets/stage_photo/stage170525.jpg'
import imgStage180525 from '../assets/stage_photo/stage180525.jpg'
import imgStage230525 from '../assets/stage_photo/stage230525.jpg'
import imgStage240525 from '../assets/stage_photo/stage240525.jpg'
import imgStage250525 from '../assets/stage_photo/stage250525.jpg'
import imgStage310525 from '../assets/stage_photo/stage310525.jpg'
import imgStage010625 from '../assets/stage_photo/stage010625.jpg'
import imgStage070625 from '../assets/stage_photo/stage070625.jpg'
import imgStage080625 from '../assets/stage_photo/stage080625.jpg'
import imgStage140625 from '../assets/stage_photo/stage140625.jpg'
import imgStage150625 from '../assets/stage_photo/stage150625.jpg'
import imgStage280625 from '../assets/stage_photo/stage280625.jpg'
import imgStage290625 from '../assets/stage_photo/stage290625.jpg'
import imgStage050725 from '../assets/stage_photo/stage050725.jpg'
import imgStage060725 from '../assets/stage_photo/stage060725.jpg'
import imgStage120725 from '../assets/stage_photo/stage120725.jpg'
import imgStage200725 from '../assets/stage_photo/stage200725.jpg'
import imgStage270725 from '../assets/stage_photo/stage270725.jpg'
import imgStage020825 from '../assets/stage_photo/stage020825.jpg'
import imgStage030825 from '../assets/stage_photo/stage030825.jpg'
import imgStage090825 from '../assets/stage_photo/stage090825.jpg'
import imgStage100825 from '../assets/stage_photo/stage100825.jpg'
import imgStage160825 from '../assets/stage_photo/stage160825.jpg'
import imgStage170825 from '../assets/stage_photo/stage170825.jpg'
import imgStage240825 from '../assets/stage_photo/stage240825.jpg'
import imgStage310825 from '../assets/stage_photo/stage310825.jpg'
import imgStage070925 from '../assets/stage_photo/stage070925.jpg'
import imgStage130925 from '../assets/stage_photo/stage130925.jpg'
import imgStage140925 from '../assets/stage_photo/stage140925.jpg'
import imgStage190925 from '../assets/stage_photo/stage190925.jpg'
import imgStage200925 from '../assets/stage_photo/stage200925.jpg'
import imgStage270925 from '../assets/stage_photo/stage270925.jpg'




//early stage
const EARLY: Slot[] = [
  { date: 'First Stage 27/01/2024', thumb: imgStage270124 },
  { date: '28/01/2024', thumb: imgStage280124 },
  { date: '04/02/2024', thumb: imgStage040224 },
  { date: '10/02/2024', thumb: imgStage100224 },
  { date: '11/02/2024', thumb: imgStage110224 },
  { date: '18/02/2024', thumb: imgStage180224 },
  { date: '25/02/2024', thumb: imgStage250224 },
  { date: '09/03/2024', thumb: imgStage090324 },
  { date: '10/03/2024', thumb: imgStage100324 },
  { date: '16/03/2024', thumb: imgStage160324 },
  { date: '17/03/2024', thumb: imgStage170324 },
  { date: '24/03/2024', thumb: imgStage240324 },
  { date: '30/03/2024', thumb: imgStage300324 },
  { date: '06/04/2024', thumb: imgStage060424 },
  { date: '07/04/2024', thumb: imgStage070424 },
  { date: '20/04/2024', thumb: imgStage200424 },
  { date: '26/04/2024', thumb: imgStage260424 },
  { date: '27/04/2024', thumb: imgStage270424 },
  { date: '28/04/2024', thumb: imgStage280424 },
  { date: '04/05/2024', thumb: imgStage040524 },
  { date: '05/05/2024', thumb: imgStage050524 },
  { date: 'Catsolute Festival 12/05/2024', thumb: imgStage120524 },
  { date: '18/05/2024', thumb: imgStage180524 },
  { date: '19/05/2024', thumb: imgStage190524 },
  { date: '25/05/2024', thumb: imgStage250524 },
  { date: '02/06/2024', thumb: imgStage020624 },
  { date: '08/06/2024', thumb: imgStage080624 },
  { date: '15/06/2024', thumb: imgStage150624 },
  { date: '16/06/2024', thumb: imgStage160624 },
  { date: '21/06/2024', thumb: imgStage210624 },
  { date: '22/06/2024', thumb: imgStage220624 },
  { date: '23/06/2024', thumb: imgStage230624 },
  { date: '30/06/2024', thumb: imgStage300624 },
  { date: '01/07/2024', thumb: imgStage010724 },
  { date: '06/07/2024', thumb: imgStage060724 },
  { date: '07/07/2024', thumb: imgStage070724 },
  { date: '13/07/2024', thumb: imgStage130724 },
  { date: '14/07/2024', thumb: imgStage140724 },
  { date: '20/07/2024', thumb: imgStage200724 },
  { date: '21/07/2024', thumb: imgStage210724 },
  { date: '27/07/2024', thumb: imgStage270724 },
  { date: '03/08/2024', thumb: imgStage030824 },
  { date: '04/08/2024', thumb: imgStage040824 },
  { date: '10/08/2024', thumb: imgStage100824 },
  { date: '11/08/2024', thumb: imgStage110824 },
  { date: '18/08/2024', thumb: imgStage180824 },
  { date: '24/08/2024', thumb: imgStage240824 },
  { date: '25/08/2024', thumb: imgStage250824 },
  { date: '31/08/2024', thumb: imgStage310824 },
  { date: '01/09/2024', thumb: imgStage010924 },
  { date: '07/09/2024', thumb: imgStage070924 },
  { date: '08/09/2024', thumb: imgStage080924 },
  { date: '15/09/2024', thumb: imgStage150924 },
  { date: '21/09/2024', thumb: imgStage210924 },
  { date: '23/09/2024', thumb: imgStage230924 },
  { date: '28/09/2024', thumb: imgStage280924 },
  { date: '29/09/2024', thumb: imgStage290924 },
  { date: '05/10/2024', thumb: imgStage051024 },
  { date: '13/10/2024', thumb: imgStage131024 },
  { date: '19/10/2024', thumb: imgStage191024 },
  { date: 'Birthday Stage 20/10/2024', thumb: imgStage201024 },
  { date: '26/10/2024', thumb: imgStage261024 },
  { date: '27/10/2024', thumb: imgStage271024 },
  { date: '03/11/2024', thumb: imgStage031124 },
  { date: '09/11/2024', thumb: imgStage091124 },
  { date: '10/11/2024', thumb: imgStage101124 },
  { date: '16/11/2024', thumb: imgStage161124 },
  { date: '17/11/2024', thumb: imgStage171124 },
  { date: '23/11/2024', thumb: imgStage231124 },
  { date: '24/11/2024', thumb: imgStage241124 },
  { date: '30/11/2024', thumb: imgStage301124 },
  { date: '01/12/2024', thumb: imgStage011224 },
  { date: 'One Man Live 08/12/2024', thumb: imgStage081224 },
  { date: '14/12/2024', thumb: imgStage141224 },
  { date: '15/12/2024', thumb: imgStage151224 },
  { date: '20/12/2024', thumb: imgStage201224 },
  { date: '22/12/2024', thumb: imgStage221224 },
  { date: '05/01/2025', thumb: imgStage050125 },
  { date: '11/01/2025', thumb: imgStage110125 },
  { date: '12/01/2025', thumb: imgStage120125 },
  { date: '25/01/2025', thumb: imgStage250125 },
  { date: '26/01/2025', thumb: imgStage260125 },
  
]

// late stage
const LATE: Slot[] = [
  { date: '01/02/2025', thumb: imgStage010225 },
  { date: '02/02/2025', thumb: imgStage020225 },
  { date: '08/02/2025', thumb: imgStage080225 },
  { date: '09/02/2025', thumb: imgStage090225 },
  { date: '14/02/2025', thumb: imgStage140225 },
  { date: '15/02/2025', thumb: imgStage150225 },
  { date: '16/02/2025', thumb: imgStage160225 },
  { date: '22/02/2025', thumb: imgStage220225 },
  { date: '23/02/2025', thumb: imgStage230225 },
  { date: '01/03/2025', thumb: imgStage010325 },
  { date: '02/03/2025', thumb: imgStage020325 },
  { date: '08/03/2025', thumb: imgStage080325 },
  { date: '09/03/2025', thumb: imgStage090325 },
  { date: '15/03/2025', thumb: imgStage150325 },
  { date: '16/03/2025', thumb: imgStage160325 },
  { date: '22/03/2025', thumb: imgStage220325 },
  { date: '23/03/2025', thumb: imgStage230325 },
  { date: '29/03/2025', thumb: imgStage290325 },
  { date: '30/03/2025', thumb: imgStage300325 },
  { date: '04/04/2025', thumb: imgStage040425 },
  { date: '06/04/2025', thumb: imgStage060425 },
  { date: '12/04/2025', thumb: imgStage120425 },
  { date: '19/04/2025', thumb: imgStage190425 },
  { date: '20/04/2025', thumb: imgStage200425 },
  { date: '03/05/2025', thumb: imgStage030525 },
  { date: '10/05/2025', thumb: imgStage100525 },
  { date: '11/05/2025', thumb: imgStage110525 },
  { date: '17/05/2025', thumb: imgStage170525 },
  { date: '18/05/2025', thumb: imgStage180525 },
  { date: '23/05/2025', thumb: imgStage230525 },
  { date: '24/05/2025', thumb: imgStage240525 },
  { date: '25/05/2025', thumb: imgStage250525 },
  { date: '31/05/2025', thumb: imgStage310525 },
  { date: '01/06/2025', thumb: imgStage010625 },
  { date: '07/06/2025', thumb: imgStage070625 },
  { date: '08/06/2025', thumb: imgStage080625 },
  { date: '14/06/2025', thumb: imgStage140625 },
  { date: '15/06/2025', thumb: imgStage150625 },
  { date: '28/06/2025', thumb: imgStage280625 },
  { date: '29/06/2025', thumb: imgStage290625 },
  { date: '05/07/2025', thumb: imgStage050725 },
  { date: '06/07/2025', thumb: imgStage060725 },
  { date: '12/07/2025', thumb: imgStage120725 },
  { date: '20/07/2025', thumb: imgStage200725 },
  { date: '27/07/2025', thumb: imgStage270725 },
  { date: '02/08/2025', thumb: imgStage020825 },
  { date: '03/08/2025', thumb: imgStage030825 },
  { date: '09/08/2025', thumb: imgStage090825 },
  { date: '10/08/2025', thumb: imgStage100825 },
  { date: '16/08/2025', thumb: imgStage160825 },
  { date: '17/08/2025', thumb: imgStage170825 },
  { date: '24/08/2025', thumb: imgStage240825 },
  { date: '31/08/2025', thumb: imgStage310825 },
  { date: '07/09/2025', thumb: imgStage070925 },
  { date: '13/09/2025', thumb: imgStage130925 },
  { date: '14/09/2025', thumb: imgStage140925 },
  { date: '19/09/2025', thumb: imgStage190925 },
  { date: '20/09/2025', thumb: imgStage200925 },
  { date: '27/09/2025', thumb: imgStage270925 },
  { date: '28/09/2025', thumb: null },
  { date: '03/10/2025', thumb: null },
  { date: '04/10/2025', thumb: null },
  { date: '05/10/2025', thumb: null },
  

]

export default function Stages() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mode, setMode] = useState<'early' | 'late'>('early')

  useEffect(() => {
    const q = searchParams.get('mode')
    if (q === 'late' || q === 'early') setMode(q)
  }, [searchParams])

  const slots = mode === 'early' ? EARLY : LATE
  const label = mode === 'early' ? '27/01/2024 - 27/01/2025' : '28/01/2025 - ปัจจุบัน'

  // ปุ่มย้อนมีได้เมื่ออยู่หน้า late
  const canPrev = mode === 'late'
  // ปุ่มไปต่อมีได้เมื่ออยู่หน้า early และมีข้อมูลฝั่ง late
  const canNext = mode === 'early' && LATE.length > 0

  const goPrev = () => {
    if (!canPrev) return
    setMode('early')
    setSearchParams({ mode: 'early' })
  }
  const goNext = () => {
    if (!canNext) return
    setMode('late')
    setSearchParams({ mode: 'late' })
  }

  return (
    <section className="container">
      <h1 className="title">รูปสเตจ</h1>

      <div className="stage-range">
        {/* ปุ่มย้อนซ้าย */}
        <button
          className="stage-range-btn prev"
          onClick={goPrev}
          disabled={!canPrev}
          aria-label="ไปหน้าก่อน"
        >‹</button>

        {label}

        {/* ปุ่มไปขวา */}
        <button
          className="stage-range-btn next"
          onClick={goNext}
          disabled={!canNext}
          aria-label="ไปหน้าถัดไป"
        >›</button>
      </div>

      <div className="stage-list">
        {slots.map((it, idx) => (
          <div key={`${it.date}-${idx}`} className="card stage-item">
            <div className="stage-thumb">
              {it.thumb ? (
                <img src={it.thumb} alt={it.date} loading="lazy" draggable={false} />
              ) : (
                <span>รูปสเตจ</span>
              )}
            </div>
            <div className="stage-spacer" />
            <div className="stage-date">{it.date}</div>
          </div>
        ))}
        {slots.length === 0 && (
          <div className="muted" style={{ textAlign: 'center' }}>
            ไม่มีรูปในช่วงนี้
          </div>
        )}
      </div>
    </section>
  )
}
