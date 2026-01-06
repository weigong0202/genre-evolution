/**
 * Data validation utilities to ensure consistency across data files
 * Run this in development to catch data mismatches early
 */

import { genres } from '../data/genres'
import { genreArtists } from '../data/artists'
import { genreDetails } from '../data/genreDetails'
import { genreAudioSamples } from '../data/genreAudioSamples'

export interface ValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

/**
 * Validate that all data files are consistent
 */
export function validateGenreData(): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Get all genre IDs from the main genres list
  const genreIds = new Set(genres.map(g => g.id))

  // Check each genre has corresponding data
  for (const genre of genres) {
    // Check genreDetails
    if (!genreDetails[genre.id]) {
      errors.push(`Genre "${genre.id}" missing from genreDetails.ts`)
    }

    // Check genreArtists
    if (!genreArtists[genre.id]) {
      warnings.push(`Genre "${genre.id}" has no artists in artists.ts`)
    } else if (genreArtists[genre.id].length === 0) {
      warnings.push(`Genre "${genre.id}" has empty artists array`)
    }

    // Check genreAudioSamples
    if (!genreAudioSamples[genre.id]) {
      warnings.push(`Genre "${genre.id}" missing audio sample`)
    }

    // Validate connections reference existing genres
    for (const connectionId of genre.connections) {
      if (!genreIds.has(connectionId)) {
        errors.push(`Genre "${genre.id}" has invalid connection "${connectionId}"`)
      }
    }
  }

  // Check for orphaned entries in other files
  for (const key of Object.keys(genreDetails)) {
    if (!genreIds.has(key)) {
      warnings.push(`genreDetails has orphaned entry "${key}"`)
    }
  }

  for (const key of Object.keys(genreArtists)) {
    if (!genreIds.has(key)) {
      warnings.push(`genreArtists has orphaned entry "${key}"`)
    }
  }

  for (const key of Object.keys(genreAudioSamples)) {
    if (!genreIds.has(key)) {
      warnings.push(`genreAudioSamples has orphaned entry "${key}"`)
    }
  }

  // Validate artist cross-references
  for (const [_genreId, artists] of Object.entries(genreArtists)) {
    for (const artist of artists) {
      // Check artist's genres reference valid genres
      if (artist.genres) {
        for (const artistGenreId of artist.genres) {
          if (!genreIds.has(artistGenreId)) {
            warnings.push(`Artist "${artist.name}" references invalid genre "${artistGenreId}"`)
          }
        }
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}

/**
 * Run validation and log results (useful for development)
 */
export function logValidationResults(): void {
  const result = validateGenreData()

  if (result.errors.length > 0) {
    console.error('❌ Data validation errors:')
    result.errors.forEach(e => console.error(`  - ${e}`))
  }

  if (result.warnings.length > 0) {
    console.warn('⚠️  Data validation warnings:')
    result.warnings.forEach(w => console.warn(`  - ${w}`))
  }

  if (result.isValid && result.warnings.length === 0) {
    console.log('✅ All data files are consistent')
  } else if (result.isValid) {
    console.log('✅ No critical errors (but warnings exist)')
  }
}
