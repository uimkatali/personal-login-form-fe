import { ProjectsData } from '@/types/projects'
import { PROJECTSMOCK } from '../MOCKDATA'
import { selectProjectId } from '../redux/selectors/projectsSelectors'
import { Chip, Container, Grid, Paper, Typography, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import { TRANSLATION_KEYS } from '../i18n/translationKeys'
import { useTranslation } from 'react-i18next'

export const Details = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const projectId = useSelector(selectProjectId)

  const proj = PROJECTSMOCK.find((item: ProjectsData) => item._id === projectId)

  return (
    <>
      {proj && (
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Paper sx={{ padding: 1 }}>
            <Grid container gap={2}>
              <Chip variant="outlined" label={`${t(TRANSLATION_KEYS.ID)}${proj._id} `} />
              <Paper sx={{ padding: 1 }}>
                {t(TRANSLATION_KEYS.PROJECTNAME)}: {proj.projectName}
              </Paper>
              <Paper sx={{ padding: 1 }}>
                {t(TRANSLATION_KEYS.ACRONYM)}: {proj.projectAcronym}
              </Paper>
            </Grid>
          </Paper>
          <Paper sx={{ padding: 1 }}>
            <Grid container gap={2}>
              <Typography sx={{ padding: '2', width: '100%' }} variant="h5">
                {'Team organisation'}
              </Typography>
              {Object.entries(proj.projectTeam).map(([key, member]) => (
                <Grid item xs={6} sm={4} md={3} key={key}>
                  <Chip variant="outlined" label={`${member.roleName}: ${member.memberName}`} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      )}
    </>
  )
}
