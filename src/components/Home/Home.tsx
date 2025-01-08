import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  List,
  Typography,
  useTheme,
} from '@mui/material'
import { ProjectsData } from '@/types/projects'
import { PROJECTSMOCK } from '../../MOCKDATA'

export default function Home() {
  const { t } = useTranslation()
  // const { user } = useAuth0()
  const theme = useTheme()

  return (
    <>
      <List sx={{ padding: 1, position: 'relative' }}>
        {PROJECTSMOCK.map((item: ProjectsData) => (
          <Card
            sx={{
              marginBottom: 1,
              color: theme.palette.secondary.main,
              background: theme.palette.primary.main,
            }}
            elevation={4}
          >
            <CardContent>
              <Typography variant="h5">{item.projectName}</Typography>
              <Typography variant="h6">{item.projectAcronym}</Typography>
              <Grid
                container
                sx={{ padding: 1 }}
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {Object.entries(item.projectTeam).map(([key, member]) => (
                  <Grid item xs={6} sm={4} md={3} key={key}>
                    <Chip variant="outlined" label={`${member.roleName}: ${member.memberName}`} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <Button sx={{ color: theme.palette.secondary.main }} size="small" variant="text">
                {t(TRANSLATION_KEYS.DETAILS)}
              </Button>
              <Button sx={{ color: theme.palette.secondary.main }} size="small" variant="text">
                {t(TRANSLATION_KEYS.EDIT)}
              </Button>
            </CardActions>
          </Card>
        ))}
      </List>
    </>
  )
}
