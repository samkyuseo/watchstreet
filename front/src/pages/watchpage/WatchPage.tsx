import { useState, useEffect } from 'react'

import { Page } from '../../components/layouts/Page'
import { Content } from '../../components/layouts/Content'
import { Section } from '../../components/layouts/Section'
import { StickySidebar } from '../../components/layouts/StickySidebar'

import { Navbar } from '../../components/navbars/Navbar'
import { Chart } from '../../components/charts/Chart'
import { Specs } from '../../components/specs/Specs'
import { WatchImage } from '../../components/images/WatchImage/WatchImage'

import { Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { getAvgPrices, getSpecs } from '../../api/lib/watch'
import { IPriceData, ISpecs, IAvgPrice } from '../../../../types'
import { LoadingPage } from '../loadingpage/LoadingPage'

const WatchPage = () => {
  const { id } = useParams<{ id: string }>()
  const [specs, setSpecs] = useState<ISpecs>()
  const [avgPrices, setAvgPrices] = useState<IAvgPrice[]>()

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const watch = await getSpecs(id)
        setSpecs(watch)
      }
    }
    fetchData().catch(console.error)
  }, [id])

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const avgPrices = await getAvgPrices(id)
        setAvgPrices(avgPrices)
      }
    }
    fetchData().catch(console.error)
  }, [id])

  if (!specs || !avgPrices) {
    return <LoadingPage />
  }

  return (
    <>
      <Navbar />
      <Page>
        <Content>
          {/* Price Data Section */}
          <Section>
            <Chart
              subtitle={`${specs.general.brand_name}`}
              title={`${specs.general.model_name} ${specs.general.model_number}`}
              data={avgPrices}
            />
          </Section>
          {/* Specifications Section */}
          <Section>
            <Specs specs={specs} />
          </Section>
        </Content>
        <StickySidebar height='350px'>
          {/* Image */}
          <WatchImage image={specs.images[0]} />
          {/* Actions */}
          <Button mt='40px' variant='pop' width='100%'>
            Add to Collection
          </Button>
          <Button mt='20px' variant='outline' width='100%'>
            Add to List
          </Button>
        </StickySidebar>
      </Page>
    </>
  )
}

export { WatchPage }
